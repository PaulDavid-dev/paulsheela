// Calendar & Sharing Utility for Paul & Sheela's Wedding

export const WEDDING_DETAILS = {
  groom: "G. Paul David",
  groomParents: "Mr. B. Gunasekaran & Mrs. G. Lourdumary - (Gracy)",
  groomOrigin: "Erode - Nadarmadu",
  bride: "R. Sheela Percy",
  brideParents: "Mr. R. Raju & Mrs. R. Nallammal - (Thabithal)",
  brideOrigin: "Trichy - Sholamadevi",
  dateFormatted: "Saturday, 10th October 2026",
  timeFormatted: "From 10:30 a.m. onwards",
  dateTimeISO: "2026-10-10T10:30:00+05:30",
  venue: "M.P Bhavani Mahal, Thirukattupalli",
  bibleVerse: "This is the day the LORD has made: Let us rejoice and be glad in it. - Psalm 118:24",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=M.P+Bhavani+Mahal+Thirukattupalli",
};

/**
 * Generate Google Calendar Link
 */
export function getGoogleCalendarUrl() {
  const title = encodeURIComponent("Holy Matrimony | G. Paul David & R. Sheela Percy");
  const details = encodeURIComponent(
    `Holy Wedding of G. Paul David & R. Sheela Percy\n\n` +
    `"This is the day the LORD has made: Let us rejoice and be glad in it." - Psalm 118:24\n\n` +
    `Venue: M.P Bhavani Mahal, Thirukattupalli\n` +
    `Time: Saturday, 10th October 2026 from 10:30 AM onwards.\n\n` +
    `We warmly solicit your prayers and gracious presence with family and friends.`
  );
  const location = encodeURIComponent("M.P Bhavani Mahal, Thirukattupalli");

  // 10:30 AM IST (UTC+5:30) on 10 Oct 2026 = 05:00:00 UTC
  // End at 03:30 PM IST = 10:00:00 UTC
  const dates = "20261010T050000Z/20261010T100000Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}

/**
 * Download .ics file for Apple Calendar / Outlook
 */
export function downloadIcsFile() {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Paul and Sheela Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:paul-sheela-wedding-20261010@invitation",
    "DTSTAMP:20260901T000000Z",
    "DTSTART:20261010T050000Z",
    "DTEND:20261010T100000Z",
    "SUMMARY:Holy Matrimony | G. Paul David & R. Sheela Percy",
    "DESCRIPTION:Holy Wedding of G. Paul David & R. Sheela Percy at M.P Bhavani Mahal, Thirukattupalli.\\n\\nPsalm 118:24 - This is the day the LORD has made: Let us rejoice and be glad in it.",
    "LOCATION:M.P Bhavani Mahal, Thirukattupalli",
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT24H",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder: Holy Matrimony of Paul & Sheela tomorrow!",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "Paul_Sheela_Holy_Wedding.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Generate WhatsApp share message URL
 */
export function getWhatsAppShareUrl() {
  const text = encodeURIComponent(
    `✨ *HOLY WEDDING INVITATION* ✨\n\n` +
    `_"This is the day the LORD has made: Let us rejoice and be glad in it." - Psalm 118:24_\n\n` +
    `Dear Family & Friends,\n` +
    `We cordially solicit your esteemed presence and blessings on the auspicious occasion of the holy matrimony of our children:\n\n` +
    `🤵 *G. PAUL DAVID*\n` +
    `     _With_\n` +
    `👰 *R. SHEELA PERCY*\n\n` +
    `🗓 *Date:* Saturday, 10th October 2026\n` +
    `⏰ *Time:* 10:30 AM onwards\n` +
    `📍 *Venue:* M.P Bhavani Mahal, Thirukattupalli\n\n` +
    `✨ View our interactive invitation & map: ${window.location.href}\n\n` +
    `With best compliments from:\n*Friends & Relatives* 🌿🕊️`
  );
  return `https://api.whatsapp.com/send?text=${text}`;
}
