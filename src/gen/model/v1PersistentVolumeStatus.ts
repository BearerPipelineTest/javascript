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
* PersistentVolumeStatus is the current status of a persistent volume.
*/
export class V1PersistentVolumeStatus {
    /**
    * A human-readable message indicating details about why the volume is in this state.
    */
    'message'?: string;
    /**
    * Phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
    */
    'phase'?: string;
    /**
    * Reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
    */
    'reason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1PersistentVolumeStatus.attributeTypeMap;
    }
}

