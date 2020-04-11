const db = require('../../config/db');
const checkType = require('../../utils').checkType;

module.exports = class ServiceCenter {
    constructor({ serviceCenterId = null, name = null, serviceCenterDescription = null, hqAddress = null } = {}) {
        // their own class atrribute ref. from class diagram
        this._serviceCenterId = serviceCenterId;
        this._name = name;
        this._serviceCenterDescription = serviceCenterDescription;
        this._hqAddress = hqAddress;
        // their relationships to its neighbor ref. from class diagram
        this._serviceCenterBranch = []; // relationship to ServiceCenterBranch
    }

    // DM layer CRUD
    _create() {
        //get policyOwnerId
        return db.execute(
            'INSERT INTO service_center(service_center_id, name, hq_address, service_center_description) VALUES (?, ?, ?, ?)',
            [this._serviceCenterId, this._name, this.hqAddress, this._serviceCenterDescription]
        );
    }

    static _read() {
        return db.execute('SELECT * FROM service_center');
    }

    static _readByServiceCenterId(serviceCenterId) {
        return db.execute('SELECT * FROM service_center WHERE service_center_id = ?', [serviceCenterId]);
    }

    _update() {
        return db.execute('UPDATE service_center SET name = ?, hq_address = ?, service_center_description= ? WHERE service_center_id = ?',
            [this._name, this._hqAddress, this._serviceCenterDescription, this._serviceCenterId]);
    }

    _delete() {
        return db.execute('DELETE FROM service_center WHERE service_center_id = ?', [this._serviceCenterId]);
    }

    // getter and setter
    getProperty() {
        return {
            serviceCenterId = this._serviceCenterId,
            name = this._name,
            serviceCenterDesciption = this._serviceCenterDescription,
            hqAddress = this._hqAddress,
            serviceCenterBranch = this._serviceCenterBranch
        };
    }

    setProperty({ // set only its own attributes
        // destructuring object as parameter by using old values as a default.
        serviceCenterId = this._serviceCenterId,
        name = this._name,
        serviceCenterDesciption = this._serviceCenterDescription,
        hqAddress = this._hqAddress
    }) {
        // check datatype
        checkType(serviceCenterId, 'String');
        checkType(name, 'String');
        checkType(serviceCenterDescription, 'String');
        checkType(hqAddress, 'String');
        // assign to private variables
        this._serviceCenterId = serviceCenterId;
        this._name = name;
        this._serviceCenterDescription = serviceCenterDesciption;
        this._hqAddress = hqAddress;
    }
}