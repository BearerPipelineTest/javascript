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
* SubjectAccessReviewStatus
*/
export class V1SubjectAccessReviewStatus {
    /**
    * Allowed is required. True if the action would be allowed, false otherwise.
    */
    'allowed': boolean;
    /**
    * Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
    */
    'denied'?: boolean;
    /**
    * EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
    */
    'evaluationError'?: string;
    /**
    * Reason is optional.  It indicates why a request was allowed or denied.
    */
    'reason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowed",
            "baseName": "allowed",
            "type": "boolean"
        },
        {
            "name": "denied",
            "baseName": "denied",
            "type": "boolean"
        },
        {
            "name": "evaluationError",
            "baseName": "evaluationError",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1SubjectAccessReviewStatus.attributeTypeMap;
    }
}

