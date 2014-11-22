/*
 * Copyright 2013 Closure Compiler Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions of methods and properties defined in
 * DOM Level 2 Core.
 *
 * http://www.w3.org/TR/DOM-Level-2-Core/
 *
 * @externs
 */

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/document.createElementNS
 * @see http://w3c.github.io/webcomponents/spec/custom/#extensions-to-document-interface-to-instantiate
 * @param {?string} namespaceURI
 * @param {string} qualifiedName
 * @param {string=} opt_typeExtension
 * @return {!Element}
 */
Document.prototype.createElementNS =
    function(namespaceURI, qualifiedName, opt_typeExtension) {};

/**
 * @param {?string} namespaceURI
 * @param {string} qualifiedName
 * @return {Attr}
 */
Document.prototype.createAttributeNS = function(namespaceURI, qualifiedName) {};