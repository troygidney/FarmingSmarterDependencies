/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '../di/injection_token';
import { makePropDecorator } from '../util/decorators';
/**
 * A DI token that you can use to create a virtual [provider](guide/glossary#provider)
 * that will populate the `entryComponents` field of components and NgModules
 * based on its `useValue` property value.
 * All components that are referenced in the `useValue` value (either directly
 * or in a nested array or map) are added to the `entryComponents` property.
 *
 * @usageNotes
 *
 * The following example shows how the router can populate the `entryComponents`
 * field of an NgModule based on a router configuration that refers
 * to components.
 *
 * ```typescript
 * // helper function inside the router
 * function provideRoutes(routes) {
 *   return [
 *     {provide: ROUTES, useValue: routes},
 *     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: routes, multi: true}
 *   ];
 * }
 *
 * // user code
 * let routes = [
 *   {path: '/root', component: RootComp},
 *   {path: '/teams', component: TeamsComp}
 * ];
 *
 * @NgModule({
 *   providers: [provideRoutes(routes)]
 * })
 * class ModuleWithRoutes {}
 * ```
 *
 * @publicApi
 */
export var ANALYZE_FOR_ENTRY_COMPONENTS = new InjectionToken('AnalyzeForEntryComponents');
/**
 * Base class for query metadata.
 *
 * @see `ContentChildren`.
 * @see `ContentChild`.
 * @see `ViewChildren`.
 * @see `ViewChild`.
 *
 * @publicApi
 */
var Query = /** @class */ (function () {
    function Query() {
    }
    return Query;
}());
export { Query };
var ɵ0 = function (selector, data) {
    if (data === void 0) { data = {}; }
    return (tslib_1.__assign({ selector: selector, first: false, isViewQuery: false, descendants: false }, data));
};
/**
 * ContentChildren decorator and metadata.
 *
 *
 * @Annotation
 * @publicApi
 */
export var ContentChildren = makePropDecorator('ContentChildren', ɵ0, Query);
var ɵ1 = function (selector, data) {
    if (data === void 0) { data = {}; }
    return (tslib_1.__assign({ selector: selector, first: true, isViewQuery: false, descendants: true }, data));
};
/**
 * ContentChild decorator and metadata.
 *
 *
 * @Annotation
 *
 * @publicApi
 */
export var ContentChild = makePropDecorator('ContentChild', ɵ1, Query);
var ɵ2 = function (selector, data) {
    if (data === void 0) { data = {}; }
    return (tslib_1.__assign({ selector: selector, first: false, isViewQuery: true, descendants: true }, data));
};
/**
 * ViewChildren decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export var ViewChildren = makePropDecorator('ViewChildren', ɵ2, Query);
var ɵ3 = function (selector, data) {
    return (tslib_1.__assign({ selector: selector, first: true, isViewQuery: true, descendants: true }, data));
};
/**
 * ViewChild decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export var ViewChild = makePropDecorator('ViewChild', ɵ3, Query);
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9tZXRhZGF0YS9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXJELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRXJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1DRztBQUNILE1BQU0sQ0FBQyxJQUFNLDRCQUE0QixHQUFHLElBQUksY0FBYyxDQUFNLDJCQUEyQixDQUFDLENBQUM7QUEwRGpHOzs7Ozs7Ozs7R0FTRztBQUNIO0lBQUE7SUFBNkIsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBQTlCLElBQThCOztTQWdFMUIsVUFBQyxRQUFjLEVBQUUsSUFBYztJQUFkLHFCQUFBLEVBQUEsU0FBYztJQUMzQixPQUFBLG9CQUFFLFFBQVEsVUFBQSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxJQUFLLElBQUksRUFBRTtBQUEzRSxDQUEyRTtBQVZuRjs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQTZCLGlCQUFpQixDQUN0RSxpQkFBaUIsTUFHakIsS0FBSyxDQUFDLENBQUM7U0E4RFMsVUFBQyxRQUFjLEVBQUUsSUFBYztJQUFkLHFCQUFBLEVBQUEsU0FBYztJQUMzQixPQUFBLG9CQUFFLFFBQVEsVUFBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxJQUFLLElBQUksRUFBRTtBQUF6RSxDQUF5RTtBQVZqRzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUEwQixpQkFBaUIsQ0FDaEUsY0FBYyxNQUVkLEtBQUssQ0FBQyxDQUFDO1NBb0RTLFVBQUMsUUFBYyxFQUFFLElBQWM7SUFBZCxxQkFBQSxFQUFBLFNBQWM7SUFDM0IsT0FBQSxvQkFBRSxRQUFRLFVBQUEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSyxJQUFJLEVBQUU7QUFBekUsQ0FBeUU7QUFSakc7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQTBCLGlCQUFpQixDQUNoRSxjQUFjLE1BRWQsS0FBSyxDQUFDLENBQUM7U0FvRU0sVUFBQyxRQUFhLEVBQUUsSUFBUztJQUNyQixPQUFBLG9CQUFFLFFBQVEsVUFBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxJQUFLLElBQUksRUFBRTtBQUF4RSxDQUF3RTtBQVI3Rjs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBdUIsaUJBQWlCLENBQzFELFdBQVcsTUFFWCxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnLi4vZGkvaW5qZWN0aW9uX3Rva2VuJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlL3R5cGUnO1xuaW1wb3J0IHttYWtlUHJvcERlY29yYXRvcn0gZnJvbSAnLi4vdXRpbC9kZWNvcmF0b3JzJztcblxuLyoqXG4gKiBBIERJIHRva2VuIHRoYXQgeW91IGNhbiB1c2UgdG8gY3JlYXRlIGEgdmlydHVhbCBbcHJvdmlkZXJdKGd1aWRlL2dsb3NzYXJ5I3Byb3ZpZGVyKVxuICogdGhhdCB3aWxsIHBvcHVsYXRlIHRoZSBgZW50cnlDb21wb25lbnRzYCBmaWVsZCBvZiBjb21wb25lbnRzIGFuZCBOZ01vZHVsZXNcbiAqIGJhc2VkIG9uIGl0cyBgdXNlVmFsdWVgIHByb3BlcnR5IHZhbHVlLlxuICogQWxsIGNvbXBvbmVudHMgdGhhdCBhcmUgcmVmZXJlbmNlZCBpbiB0aGUgYHVzZVZhbHVlYCB2YWx1ZSAoZWl0aGVyIGRpcmVjdGx5XG4gKiBvciBpbiBhIG5lc3RlZCBhcnJheSBvciBtYXApIGFyZSBhZGRlZCB0byB0aGUgYGVudHJ5Q29tcG9uZW50c2AgcHJvcGVydHkuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgc2hvd3MgaG93IHRoZSByb3V0ZXIgY2FuIHBvcHVsYXRlIHRoZSBgZW50cnlDb21wb25lbnRzYFxuICogZmllbGQgb2YgYW4gTmdNb2R1bGUgYmFzZWQgb24gYSByb3V0ZXIgY29uZmlndXJhdGlvbiB0aGF0IHJlZmVyc1xuICogdG8gY29tcG9uZW50cy5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAvLyBoZWxwZXIgZnVuY3Rpb24gaW5zaWRlIHRoZSByb3V0ZXJcbiAqIGZ1bmN0aW9uIHByb3ZpZGVSb3V0ZXMocm91dGVzKSB7XG4gKiAgIHJldHVybiBbXG4gKiAgICAge3Byb3ZpZGU6IFJPVVRFUywgdXNlVmFsdWU6IHJvdXRlc30sXG4gKiAgICAge3Byb3ZpZGU6IEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIHVzZVZhbHVlOiByb3V0ZXMsIG11bHRpOiB0cnVlfVxuICogICBdO1xuICogfVxuICpcbiAqIC8vIHVzZXIgY29kZVxuICogbGV0IHJvdXRlcyA9IFtcbiAqICAge3BhdGg6ICcvcm9vdCcsIGNvbXBvbmVudDogUm9vdENvbXB9LFxuICogICB7cGF0aDogJy90ZWFtcycsIGNvbXBvbmVudDogVGVhbXNDb21wfVxuICogXTtcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBwcm92aWRlcnM6IFtwcm92aWRlUm91dGVzKHJvdXRlcyldXG4gKiB9KVxuICogY2xhc3MgTW9kdWxlV2l0aFJvdXRlcyB7fVxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdBbmFseXplRm9yRW50cnlDb21wb25lbnRzJyk7XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgYEF0dHJpYnV0ZWAgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZURlY29yYXRvciB7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhhdCBhIGNvbnN0YW50IGF0dHJpYnV0ZSB2YWx1ZSBzaG91bGQgYmUgaW5qZWN0ZWQuXG4gICAqXG4gICAqIFRoZSBkaXJlY3RpdmUgY2FuIGluamVjdCBjb25zdGFudCBzdHJpbmcgbGl0ZXJhbHMgb2YgaG9zdCBlbGVtZW50IGF0dHJpYnV0ZXMuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIFN1cHBvc2Ugd2UgaGF2ZSBhbiBgPGlucHV0PmAgZWxlbWVudCBhbmQgd2FudCB0byBrbm93IGl0cyBgdHlwZWAuXG4gICAqXG4gICAqIGBgYGh0bWxcbiAgICogPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gICAqIGBgYFxuICAgKlxuICAgKiBBIGRlY29yYXRvciBjYW4gaW5qZWN0IHN0cmluZyBsaXRlcmFsIGB0ZXh0YCBhcyBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUuXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL3RzL21ldGFkYXRhL21ldGFkYXRhLnRzIHJlZ2lvbj0nYXR0cmlidXRlTWV0YWRhdGEnfVxuICAgKlxuICAgKiBAcHVibGljQXBpXG4gICAqL1xuICAobmFtZTogc3RyaW5nKTogYW55O1xuICBuZXcgKG5hbWU6IHN0cmluZyk6IEF0dHJpYnV0ZTtcbn1cblxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIEF0dHJpYnV0ZSBtZXRhZGF0YS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlIHtcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgdG8gYmUgaW5qZWN0ZWQgaW50byB0aGUgY29uc3RydWN0b3IuXG4gICAqL1xuICBhdHRyaWJ1dGVOYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIFF1ZXJ5IG1ldGFkYXRhLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeSB7XG4gIGRlc2NlbmRhbnRzOiBib29sZWFuO1xuICBmaXJzdDogYm9vbGVhbjtcbiAgcmVhZDogYW55O1xuICBpc1ZpZXdRdWVyeTogYm9vbGVhbjtcbiAgc2VsZWN0b3I6IGFueTtcbiAgc3RhdGljOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIHF1ZXJ5IG1ldGFkYXRhLlxuICpcbiAqIEBzZWUgYENvbnRlbnRDaGlsZHJlbmAuXG4gKiBAc2VlIGBDb250ZW50Q2hpbGRgLlxuICogQHNlZSBgVmlld0NoaWxkcmVuYC5cbiAqIEBzZWUgYFZpZXdDaGlsZGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUXVlcnkge31cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBDb250ZW50Q2hpbGRyZW4gZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHNlZSBgQ29udGVudENoaWxkcmVuYC5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb250ZW50Q2hpbGRyZW5EZWNvcmF0b3Ige1xuICAvKipcbiAgICogUGFyYW1ldGVyIGRlY29yYXRvciB0aGF0IGNvbmZpZ3VyZXMgYSBjb250ZW50IHF1ZXJ5LlxuICAgKlxuICAgKiBVc2UgdG8gZ2V0IHRoZSBgUXVlcnlMaXN0YCBvZiBlbGVtZW50cyBvciBkaXJlY3RpdmVzIGZyb20gdGhlIGNvbnRlbnQgRE9NLlxuICAgKiBBbnkgdGltZSBhIGNoaWxkIGVsZW1lbnQgaXMgYWRkZWQsIHJlbW92ZWQsIG9yIG1vdmVkLCB0aGUgcXVlcnkgbGlzdCB3aWxsIGJlXG4gICAqIHVwZGF0ZWQsIGFuZCB0aGUgY2hhbmdlcyBvYnNlcnZhYmxlIG9mIHRoZSBxdWVyeSBsaXN0IHdpbGwgZW1pdCBhIG5ldyB2YWx1ZS5cbiAgICpcbiAgICogQ29udGVudCBxdWVyaWVzIGFyZSBzZXQgYmVmb3JlIHRoZSBgbmdBZnRlckNvbnRlbnRJbml0YCBjYWxsYmFjayBpcyBjYWxsZWQuXG4gICAqXG4gICAqIERvZXMgbm90IHJldHJpZXZlIGVsZW1lbnRzIG9yIGRpcmVjdGl2ZXMgdGhhdCBhcmUgaW4gb3RoZXIgY29tcG9uZW50cycgdGVtcGxhdGVzLFxuICAgKiBzaW5jZSBhIGNvbXBvbmVudCdzIHRlbXBsYXRlIGlzIGFsd2F5cyBhIGJsYWNrIGJveCB0byBpdHMgYW5jZXN0b3JzLlxuICAgKlxuICAgKiAqKk1ldGFkYXRhIFByb3BlcnRpZXMqKjpcbiAgICpcbiAgICogKiAqKnNlbGVjdG9yKiogLSBUaGUgZGlyZWN0aXZlIHR5cGUgb3IgdGhlIG5hbWUgdXNlZCBmb3IgcXVlcnlpbmcuXG4gICAqICogKipkZXNjZW5kYW50cyoqIC0gVHJ1ZSB0byBpbmNsdWRlIGFsbCBkZXNjZW5kYW50cywgb3RoZXJ3aXNlIGluY2x1ZGUgb25seSBkaXJlY3QgY2hpbGRyZW4uXG4gICAqICogKipyZWFkKiogLSBUcnVlIHRvIHJlYWQgYSBkaWZmZXJlbnQgdG9rZW4gZnJvbSB0aGUgcXVlcmllZCBlbGVtZW50cy5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICogSGVyZSBpcyBhIHNpbXBsZSBkZW1vbnN0cmF0aW9uIG9mIGhvdyB0aGUgYENvbnRlbnRDaGlsZHJlbmAgZGVjb3JhdG9yIGNhbiBiZSB1c2VkLlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9jb250ZW50Q2hpbGRyZW4vY29udGVudF9jaGlsZHJlbl9ob3d0by50cyByZWdpb249J0hvd1RvJ31cbiAgICpcbiAgICogIyMjIFRhYi1wYW5lIGV4YW1wbGVcbiAgICpcbiAgICogSGVyZSBpcyBhIHNsaWdodGx5IG1vcmUgcmVhbGlzdGljIGV4YW1wbGUgdGhhdCBzaG93cyBob3cgYENvbnRlbnRDaGlsZHJlbmAgZGVjb3JhdG9yc1xuICAgKiBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgYSB0YWIgcGFuZSBjb21wb25lbnQuXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL2NvbnRlbnRDaGlsZHJlbi9jb250ZW50X2NoaWxkcmVuX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgKlxuICAgKiBAQW5ub3RhdGlvblxuICAgKi9cbiAgKHNlbGVjdG9yOiBUeXBlPGFueT58RnVuY3Rpb258c3RyaW5nLCBvcHRzPzoge2Rlc2NlbmRhbnRzPzogYm9vbGVhbiwgcmVhZD86IGFueX0pOiBhbnk7XG4gIG5ldyAoc2VsZWN0b3I6IFR5cGU8YW55PnxGdW5jdGlvbnxzdHJpbmcsIG9wdHM/OiB7ZGVzY2VuZGFudHM/OiBib29sZWFuLCByZWFkPzogYW55fSk6IFF1ZXJ5O1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIENvbnRlbnRDaGlsZHJlbiBtZXRhZGF0YS5cbiAqXG4gKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgQ29udGVudENoaWxkcmVuID0gUXVlcnk7XG5cbi8qKlxuICogQ29udGVudENoaWxkcmVuIGRlY29yYXRvciBhbmQgbWV0YWRhdGEuXG4gKlxuICpcbiAqIEBBbm5vdGF0aW9uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBDb250ZW50Q2hpbGRyZW46IENvbnRlbnRDaGlsZHJlbkRlY29yYXRvciA9IG1ha2VQcm9wRGVjb3JhdG9yKFxuICAgICdDb250ZW50Q2hpbGRyZW4nLFxuICAgIChzZWxlY3Rvcj86IGFueSwgZGF0YTogYW55ID0ge30pID0+XG4gICAgICAgICh7c2VsZWN0b3IsIGZpcnN0OiBmYWxzZSwgaXNWaWV3UXVlcnk6IGZhbHNlLCBkZXNjZW5kYW50czogZmFsc2UsIC4uLmRhdGF9KSxcbiAgICBRdWVyeSk7XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgQ29udGVudENoaWxkIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb250ZW50Q2hpbGREZWNvcmF0b3Ige1xuICAvKipcbiAgICogUGFyYW1ldGVyIGRlY29yYXRvciB0aGF0IGNvbmZpZ3VyZXMgYSBjb250ZW50IHF1ZXJ5LlxuICAgKlxuICAgKiBVc2UgdG8gZ2V0IHRoZSBmaXJzdCBlbGVtZW50IG9yIHRoZSBkaXJlY3RpdmUgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGZyb20gdGhlIGNvbnRlbnQgRE9NLlxuICAgKiBJZiB0aGUgY29udGVudCBET00gY2hhbmdlcywgYW5kIGEgbmV3IGNoaWxkIG1hdGNoZXMgdGhlIHNlbGVjdG9yLFxuICAgKiB0aGUgcHJvcGVydHkgd2lsbCBiZSB1cGRhdGVkLlxuICAgKlxuICAgKiBDb250ZW50IHF1ZXJpZXMgYXJlIHNldCBiZWZvcmUgdGhlIGBuZ0FmdGVyQ29udGVudEluaXRgIGNhbGxiYWNrIGlzIGNhbGxlZC5cbiAgICpcbiAgICogRG9lcyBub3QgcmV0cmlldmUgZWxlbWVudHMgb3IgZGlyZWN0aXZlcyB0aGF0IGFyZSBpbiBvdGhlciBjb21wb25lbnRzJyB0ZW1wbGF0ZXMsXG4gICAqIHNpbmNlIGEgY29tcG9uZW50J3MgdGVtcGxhdGUgaXMgYWx3YXlzIGEgYmxhY2sgYm94IHRvIGl0cyBhbmNlc3RvcnMuXG4gICAqXG4gICAqICoqTWV0YWRhdGEgUHJvcGVydGllcyoqOlxuICAgKlxuICAgKiAqICoqc2VsZWN0b3IqKiAtIFRoZSBkaXJlY3RpdmUgdHlwZSBvciB0aGUgbmFtZSB1c2VkIGZvciBxdWVyeWluZy5cbiAgICogKiAqKnJlYWQqKiAtIFRydWUgdG8gcmVhZCBhIGRpZmZlcmVudCB0b2tlbiBmcm9tIHRoZSBxdWVyaWVkIGVsZW1lbnQuXG4gICAqICogKipzdGF0aWMqKiAtIFRydWUgdG8gcmVzb2x2ZSBxdWVyeSByZXN1bHRzIGJlZm9yZSBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMsXG4gICAqIGZhbHNlIHRvIHJlc29sdmUgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbi5cbiAgICpcbiAgICogV2hlbiBgc3RhdGljYCBpcyBub3QgcHJvdmlkZWQsIHVzZXMgdGhlIHF1ZXJ5IHJlc3VsdHMgdG8gZGV0ZXJtaW5lIHRoZSB0aW1pbmcgb2YgcXVlcnlcbiAgICogcmVzb2x1dGlvbi4gSWYgYW55IHF1ZXJ5IHJlc3VsdHMgYXJlIGluc2lkZSBhIG5lc3RlZCB2aWV3IChzdWNoIGFzIGAqbmdJZmApLCB0aGUgcXVlcnkgaXNcbiAgICogcmVzb2x2ZWQgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbiBydW5zLiBPdGhlcndpc2UsIGl0IGlzIHJlc29sdmVkIGJlZm9yZSBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAqIHJ1bnMuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL2NvbnRlbnRDaGlsZC9jb250ZW50X2NoaWxkX2hvd3RvLnRzIHJlZ2lvbj0nSG93VG8nfVxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9jb250ZW50Q2hpbGQvY29udGVudF9jaGlsZF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICpcbiAgICogQEFubm90YXRpb25cbiAgICovXG4gIChzZWxlY3RvcjogVHlwZTxhbnk+fEZ1bmN0aW9ufHN0cmluZywgb3B0czoge3JlYWQ/OiBhbnksIHN0YXRpYzogYm9vbGVhbn0pOiBhbnk7XG4gIG5ldyAoc2VsZWN0b3I6IFR5cGU8YW55PnxGdW5jdGlvbnxzdHJpbmcsIG9wdHM6IHtyZWFkPzogYW55LCBzdGF0aWM6IGJvb2xlYW59KTogQ29udGVudENoaWxkO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIENvbnRlbnRDaGlsZCBtZXRhZGF0YS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIENvbnRlbnRDaGlsZCA9IFF1ZXJ5O1xuXG4vKipcbiAqIENvbnRlbnRDaGlsZCBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqXG4gKiBAQW5ub3RhdGlvblxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRlbnRDaGlsZDogQ29udGVudENoaWxkRGVjb3JhdG9yID0gbWFrZVByb3BEZWNvcmF0b3IoXG4gICAgJ0NvbnRlbnRDaGlsZCcsIChzZWxlY3Rvcj86IGFueSwgZGF0YTogYW55ID0ge30pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAoe3NlbGVjdG9yLCBmaXJzdDogdHJ1ZSwgaXNWaWV3UXVlcnk6IGZhbHNlLCBkZXNjZW5kYW50czogdHJ1ZSwgLi4uZGF0YX0pLFxuICAgIFF1ZXJ5KTtcblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBWaWV3Q2hpbGRyZW4gZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHNlZSBgVmlld0NoaWxkcmVuYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmlld0NoaWxkcmVuRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIFBhcmFtZXRlciBkZWNvcmF0b3IgdGhhdCBjb25maWd1cmVzIGEgdmlldyBxdWVyeS5cbiAgICpcbiAgICogVXNlIHRvIGdldCB0aGUgYFF1ZXJ5TGlzdGAgb2YgZWxlbWVudHMgb3IgZGlyZWN0aXZlcyBmcm9tIHRoZSB2aWV3IERPTS5cbiAgICogQW55IHRpbWUgYSBjaGlsZCBlbGVtZW50IGlzIGFkZGVkLCByZW1vdmVkLCBvciBtb3ZlZCwgdGhlIHF1ZXJ5IGxpc3Qgd2lsbCBiZSB1cGRhdGVkLFxuICAgKiBhbmQgdGhlIGNoYW5nZXMgb2JzZXJ2YWJsZSBvZiB0aGUgcXVlcnkgbGlzdCB3aWxsIGVtaXQgYSBuZXcgdmFsdWUuXG4gICAqXG4gICAqIFZpZXcgcXVlcmllcyBhcmUgc2V0IGJlZm9yZSB0aGUgYG5nQWZ0ZXJWaWV3SW5pdGAgY2FsbGJhY2sgaXMgY2FsbGVkLlxuICAgKlxuICAgKiAqKk1ldGFkYXRhIFByb3BlcnRpZXMqKjpcbiAgICpcbiAgICogKiAqKnNlbGVjdG9yKiogLSBUaGUgZGlyZWN0aXZlIHR5cGUgb3IgdGhlIG5hbWUgdXNlZCBmb3IgcXVlcnlpbmcuXG4gICAqICogKipyZWFkKiogLSBUcnVlIHRvIHJlYWQgYSBkaWZmZXJlbnQgdG9rZW4gZnJvbSB0aGUgcXVlcmllZCBlbGVtZW50cy5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkcmVuL3ZpZXdfY2hpbGRyZW5faG93dG8udHMgcmVnaW9uPSdIb3dUbyd9XG4gICAqXG4gICAqICMjIyBBbm90aGVyIGV4YW1wbGVcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkcmVuL3ZpZXdfY2hpbGRyZW5fZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAqXG4gICAqIEBBbm5vdGF0aW9uXG4gICAqL1xuICAoc2VsZWN0b3I6IFR5cGU8YW55PnxGdW5jdGlvbnxzdHJpbmcsIG9wdHM/OiB7cmVhZD86IGFueX0pOiBhbnk7XG4gIG5ldyAoc2VsZWN0b3I6IFR5cGU8YW55PnxGdW5jdGlvbnxzdHJpbmcsIG9wdHM/OiB7cmVhZD86IGFueX0pOiBWaWV3Q2hpbGRyZW47XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgVmlld0NoaWxkcmVuIG1ldGFkYXRhLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgVmlld0NoaWxkcmVuID0gUXVlcnk7XG5cbi8qKlxuICogVmlld0NoaWxkcmVuIGRlY29yYXRvciBhbmQgbWV0YWRhdGEuXG4gKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFZpZXdDaGlsZHJlbjogVmlld0NoaWxkcmVuRGVjb3JhdG9yID0gbWFrZVByb3BEZWNvcmF0b3IoXG4gICAgJ1ZpZXdDaGlsZHJlbicsIChzZWxlY3Rvcj86IGFueSwgZGF0YTogYW55ID0ge30pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAoe3NlbGVjdG9yLCBmaXJzdDogZmFsc2UsIGlzVmlld1F1ZXJ5OiB0cnVlLCBkZXNjZW5kYW50czogdHJ1ZSwgLi4uZGF0YX0pLFxuICAgIFF1ZXJ5KTtcblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBWaWV3Q2hpbGQgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHNlZSBgVmlld0NoaWxkYC5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWV3Q2hpbGREZWNvcmF0b3Ige1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbmZpZ3VyZXMgYSB2aWV3IHF1ZXJ5LlxuICAgKiBUaGUgY2hhbmdlIGRldGVjdG9yIGxvb2tzIGZvciB0aGUgZmlyc3QgZWxlbWVudCBvciB0aGUgZGlyZWN0aXZlIG1hdGNoaW5nIHRoZSBzZWxlY3RvclxuICAgKiBpbiB0aGUgdmlldyBET00uIElmIHRoZSB2aWV3IERPTSBjaGFuZ2VzLCBhbmQgYSBuZXcgY2hpbGQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IsXG4gICAqIHRoZSBwcm9wZXJ0eSBpcyB1cGRhdGVkLlxuICAgKlxuICAgKiBWaWV3IHF1ZXJpZXMgYXJlIHNldCBiZWZvcmUgdGhlIGBuZ0FmdGVyVmlld0luaXRgIGNhbGxiYWNrIGlzIGNhbGxlZC5cbiAgICpcbiAgICogKipNZXRhZGF0YSBQcm9wZXJ0aWVzKio6XG4gICAqXG4gICAqICogKipzZWxlY3RvcioqIC0gVGhlIGRpcmVjdGl2ZSB0eXBlIG9yIHRoZSBuYW1lIHVzZWQgZm9yIHF1ZXJ5aW5nLlxuICAgKiAqICoqcmVhZCoqIC0gVHJ1ZSB0byByZWFkIGEgZGlmZmVyZW50IHRva2VuIGZyb20gdGhlIHF1ZXJpZWQgZWxlbWVudHMuXG4gICAqICogKipzdGF0aWMqKiAtIFRydWUgdG8gcmVzb2x2ZSBxdWVyeSByZXN1bHRzIGJlZm9yZSBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnNcbiAgICpcbiAgICogV2hlbiBgc3RhdGljYCBpcyBub3QgcHJvdmlkZWQsIHVzZXMgcXVlcnkgcmVzdWx0cyB0byBkZXRlcm1pbmUgdGhlIHRpbWluZyBvZiBxdWVyeVxuICAgKiByZXNvbHV0aW9uLiBJZiBhbnkgcXVlcnkgcmVzdWx0cyBhcmUgaW5zaWRlIGEgbmVzdGVkIHZpZXcgKHN1Y2ggYXMgYCpuZ0lmYCksIHRoZSBxdWVyeSBpc1xuICAgKiByZXNvbHZlZCBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMuIE90aGVyd2lzZSwgaXQgaXMgcmVzb2x2ZWQgYmVmb3JlIGNoYW5nZSBkZXRlY3Rpb25cbiAgICogcnVucy5cbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBzZWxlY3RvcnMgYXJlIHN1cHBvcnRlZC5cbiAgICogICAqIEFueSBjbGFzcyB3aXRoIHRoZSBgQENvbXBvbmVudGAgb3IgYEBEaXJlY3RpdmVgIGRlY29yYXRvclxuICAgKiAgICogQSB0ZW1wbGF0ZSByZWZlcmVuY2UgdmFyaWFibGUgYXMgYSBzdHJpbmcgKGUuZy4gcXVlcnkgYDxteS1jb21wb25lbnQgI2NtcD48L215LWNvbXBvbmVudD5gXG4gICAqIHdpdGggYEBWaWV3Q2hpbGQoJ2NtcCcpYClcbiAgICogICAqIEFueSBwcm92aWRlciBkZWZpbmVkIGluIHRoZSBjaGlsZCBjb21wb25lbnQgdHJlZSBvZiB0aGUgY3VycmVudCBjb21wb25lbnQgKGUuZy5cbiAgICogYEBWaWV3Q2hpbGQoU29tZVNlcnZpY2UpIHNvbWVTZXJ2aWNlOiBTb21lU2VydmljZWApXG4gICAqICAgKiBBbnkgcHJvdmlkZXIgZGVmaW5lZCB0aHJvdWdoIGEgc3RyaW5nIHRva2VuIChlLmcuIGBAVmlld0NoaWxkKCdzb21lVG9rZW4nKSBzb21lVG9rZW5WYWw6XG4gICAqIGFueWApXG4gICAqICAgKiBBIGBUZW1wbGF0ZVJlZmAgKGUuZy4gcXVlcnkgYDxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPmAgd2l0aCBgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZilcbiAgICogdGVtcGxhdGU7YClcbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkL3ZpZXdfY2hpbGRfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAqXG4gICAqICMjIyBFeGFtcGxlIDJcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkL3ZpZXdfY2hpbGRfaG93dG8udHMgcmVnaW9uPSdIb3dUbyd9XG4gICAqXG4gICAqIEBBbm5vdGF0aW9uXG4gICAqL1xuICAoc2VsZWN0b3I6IFR5cGU8YW55PnxGdW5jdGlvbnxzdHJpbmcsIG9wdHM6IHtyZWFkPzogYW55LCBzdGF0aWM6IGJvb2xlYW59KTogYW55O1xuICBuZXcgKHNlbGVjdG9yOiBUeXBlPGFueT58RnVuY3Rpb258c3RyaW5nLCBvcHRzOiB7cmVhZD86IGFueSwgc3RhdGljOiBib29sZWFufSk6IFZpZXdDaGlsZDtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBWaWV3Q2hpbGQgbWV0YWRhdGEuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBWaWV3Q2hpbGQgPSBRdWVyeTtcblxuLyoqXG4gKiBWaWV3Q2hpbGQgZGVjb3JhdG9yIGFuZCBtZXRhZGF0YS5cbiAqXG4gKiBAQW5ub3RhdGlvblxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgVmlld0NoaWxkOiBWaWV3Q2hpbGREZWNvcmF0b3IgPSBtYWtlUHJvcERlY29yYXRvcihcbiAgICAnVmlld0NoaWxkJywgKHNlbGVjdG9yOiBhbnksIGRhdGE6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICh7c2VsZWN0b3IsIGZpcnN0OiB0cnVlLCBpc1ZpZXdRdWVyeTogdHJ1ZSwgZGVzY2VuZGFudHM6IHRydWUsIC4uLmRhdGF9KSxcbiAgICBRdWVyeSk7XG4iXX0=