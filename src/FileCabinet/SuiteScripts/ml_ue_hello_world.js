/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 *  Task          Date                Author                                         Remarks
 * ML-0001      17-05-205         Manthan Laad            Script to set Memo field to Hello World on Sales Order
 */
define(["SuiteScripts/Libraries/ml_lib_global_utils.js"], function (Gutils) {
  function beforeLoad(context) {}

  function beforeSubmit(context) {
    try {
      log.debug("Set Memo to Hello World!")
      Gutils.logger("VS Code Extension")
      context.newRecord.setValue({
        fieldId: "memo",
        value: Gutils.dateTimeStamp(),
        ignoreFieldChange: true,
      })
    } catch (error) {
      log.error("Error :<", error)
    }
  }

  function afterSubmit(context) {}

  return {
    beforeLoad: beforeLoad,
    afterSubmit: afterSubmit,
    beforeSubmit: beforeSubmit,
  }
})
