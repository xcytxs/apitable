/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Node move request parameters
*/
export class NodeMoveOpRo {
    /**
    * Node Id
    */
    'nodeId': string;
    /**
    * Parent Node Id of the target location
    */
    'parentId': string;
    /**
    * The previous node of the target position moves to the first position when it is empty
    */
    'preNodeId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nodeId",
            "baseName": "nodeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "preNodeId",
            "baseName": "preNodeId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NodeMoveOpRo.attributeTypeMap;
    }

    public constructor() {
    }
}

