import * as S from "./styles";
import { ActionButton } from "../UI/ActionButton";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import "react-big-calendar/lib/css/react-big-calendar.css";

const navigateContants = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE",
};

const views = {
  MONTH: "month",
  WEEK: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  AGENDA: "agenda",
};

// eslint-disable-next-line no-unused-vars, react/prop-types
function CustomToolbar({ onNavigate, onView, label }) {
  const navigate = (action) => {
    onNavigate(action);
  };

  const viewItem = (view) => {
    onView(view);
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "3rem",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "1rem",
          height: "3rem",
          alignItems: "center",
        }}
      >
        <span style={{ width: "70px" }}>
          <ActionButton
            text={"Hoje"}
            backgroundColor={"#47d2a9"}
            hoverColor={"#3bad8b"}
            boxShadow={"0 1px 2px 0 #00000042"}
            click={navigate.bind(null, navigateContants.TODAY)}
          />
        </span>

        <span style={{ width: "100px" }}>
          <ActionButton
            text={"Próximo"}
            backgroundColor={"#3cb3f8"}
            hoverColor={"#2d8ac0"}
            boxShadow={"0 1px 2px 0 #00000042"}
            click={navigate.bind(null, navigateContants.NEXT)}
          />
        </span>

        <span style={{ width: "100px" }}>
          <ActionButton
            text={"Anterior"}
            backgroundColor={"#3cb3f8"}
            hoverColor={"#2d8ac0"}
            boxShadow={"0 1px 2px 0 #00000042"}
            click={navigate.bind(null, navigateContants.PREVIOUS)}
          />
        </span>
      </div>

      <div style={{ width: "100%", textAlign: "center" }}>
        {dayjs(label).locale("pt-br").format("MMMM YYYY")}
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "1rem",
          justifyContent: "flex-end",
        }}
      >
        <span style={{ width: "70px" }}>
          <ActionButton
            text={"Mês"}
            backgroundColor={"#b15252"}
            hoverColor={"#8b3f3f"}
            boxShadow={"0 1px 2px 0 #00000042"}
            click={viewItem.bind(null, views.MONTH)}
          />
        </span>

        <span style={{ width: "100px" }}>
          <ActionButton
            text={"Dia"}
            backgroundColor={"#b15252"}
            hoverColor={"#8b3f3f"}
            boxShadow={"0 1px 2px 0 #00000042"}
            click={viewItem.bind(null, views.DAY)}
          />
        </span>

        <span style={{ width: "100px" }}>
          <ActionButton
            text={"Semana"}
            backgroundColor={"#b15252"}
            hoverColor={"#8b3f3f"}
            boxShadow={"0 1px 2px 0 #00000042"}
            click={viewItem.bind(null, views.WEEK)}
          />
        </span>
      </div>
    </section>
  );
}

export function Schedule() {
  const localizer = dayjsLocalizer(dayjs);
  return (
    <S.Card>
      <Calendar
        popup
        selectable
        components={{ toolbar: CustomToolbar }}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectSlot={(slotInfo) => console.log(slotInfo, "22222222")}
        views={["month", "day", "week"]}
      />
    </S.Card>
  );
}
