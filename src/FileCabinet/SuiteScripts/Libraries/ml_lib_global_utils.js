/**
 * @NApiVersion 2.1
 */
define(["N/runtime"], /**
 * @param{runtime} runtime
 */ (runtime) => {
  const logger = (message) => log.debug("Received Param", message)

  const dateTimeStamp = () => {
    const now = new Date()

    const day = now.toLocaleString("en-IN", {
      day: "2-digit",
      timeZone: "Asia/Kolkata",
    })
    const month = now.toLocaleString("en-IN", {
      month: "long",
      timeZone: "Asia/Kolkata",
    })
    const year = now.toLocaleString("en-IN", {
      year: "numeric",
      timeZone: "Asia/Kolkata",
    })
    const time = now.toLocaleString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    })

    return `${day} ${month} ${year}, ${time} IST`
  }

  return { logger, dateTimeStamp }
})
