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
import { V1PodDNSConfigOption } from './v1PodDNSConfigOption';

/**
* PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
*/
export class V1PodDNSConfig {
    /**
    * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
    */
    'nameservers'?: Array<string>;
    /**
    * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
    */
    'options'?: Array<V1PodDNSConfigOption>;
    /**
    * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
    */
    'searches'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nameservers",
            "baseName": "nameservers",
            "type": "Array<string>"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<V1PodDNSConfigOption>"
        },
        {
            "name": "searches",
            "baseName": "searches",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1PodDNSConfig.attributeTypeMap;
    }
}

