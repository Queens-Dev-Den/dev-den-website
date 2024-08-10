import "./Calendar.css";
import React from "react";

const CALENDAR_EMBED_LINK =
  "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNipigon&bgcolor=%23ffffff&showPrint=0&showCalendars=0&src=MTQzMjE0YjIxYjcwZTAxZGYwMjNkMzRhMTZjNWE4MjE5ZGYzMDVkZTJiOGI1ZTRlZjZhZWE3NTYxMDQ2MjViNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA";

function Calendar() {
  window.scrollTo(0, 0);

  return (
    <div>
      <div className="calendar-h2-container">
        <h2>Calendar</h2>
      </div>
      <div className="calendar-container">
        <GoogleCalendarEmbed />
      </div>
    </div>
  );
}

const GoogleCalendarEmbed = () => (
  <iframe
    className="google-calendar-iframe"
    src={CALENDAR_EMBED_LINK}
    title="Google Calendar"
  ></iframe>
);

export default Calendar;
