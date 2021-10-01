/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* LeaseSpec is a specification of a Lease.
*/
export class V1LeaseSpec {
    /**
    * acquireTime is a time when the current lease was acquired.
    */
    'acquireTime'?: Date;
    /**
    * holderIdentity contains the identity of the holder of a current lease.
    */
    'holderIdentity'?: string;
    /**
    * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
    */
    'leaseDurationSeconds'?: number;
    /**
    * leaseTransitions is the number of transitions of a lease between holders.
    */
    'leaseTransitions'?: number;
    /**
    * renewTime is a time when the current holder of a lease has last updated the lease.
    */
    'renewTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquireTime",
            "baseName": "acquireTime",
            "type": "Date"
        },
        {
            "name": "holderIdentity",
            "baseName": "holderIdentity",
            "type": "string"
        },
        {
            "name": "leaseDurationSeconds",
            "baseName": "leaseDurationSeconds",
            "type": "number"
        },
        {
            "name": "leaseTransitions",
            "baseName": "leaseTransitions",
            "type": "number"
        },
        {
            "name": "renewTime",
            "baseName": "renewTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return V1LeaseSpec.attributeTypeMap;
    }
}

