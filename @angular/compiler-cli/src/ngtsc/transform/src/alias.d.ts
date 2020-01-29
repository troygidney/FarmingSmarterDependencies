/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/transform/src/alias" />
import * as ts from 'typescript';
export declare function aliasTransformFactory(exportStatements: Map<string, Map<string, [string, string]>>): ts.TransformerFactory<ts.Bundle | ts.SourceFile>;
