/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { IoHomeOutline } from "react-icons/io5";
import { FiShoppingCart, FiUserPlus } from "react-icons/fi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SlOptionsVertical } from "react-icons/sl";
import { BsCalendar2Week, BsGear } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiMoonFill, PiSunFill } from "react-icons/pi";

import * as S from "./styles";
import { ThemeContext } from "../../context/theme";
import { E_THEME } from "../../utils/enums/theme";

export function Sidebar({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lockSidebar, setLockSidebar] = useState(false);
  const [media, setMedia] = useState(0);

  const { theme, setTheme } = useContext(ThemeContext);

  const [navChecked, setNavChecked] = useState({
    home: false,
    registers: false,
    sales: false,
    financial: false,
    profile: false,
    schedule: false,
    settings: false,
    notifications: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleEnterSidebar = () => {
    if (media > 1020) setIsExpanded(true);
  };

  const handleLeaveSidebar = () => {
    if (media > 1020) {
      if (lockSidebar) return;
      setIsExpanded(false);
    }
  };

  const handleLockSidebar = () => {
    setLockSidebar((state) => !state);
    !isExpanded ? setIsExpanded(true) : setIsExpanded(false);
  };

  const closeIfClickEmpty = (event) => {
    if (media <= 1020) {
      if (event.target.closest(".sidebar")) return;
      if (event.target.closest(".menu")) return;

      handleLockSidebar();
    }
  };

  const handleChangeNav = (isChecked, key) => {
    setNavChecked({
      home: false,
      registers: false,
      sales: false,
      financial: false,
      profile: false,
      schedule: false,
      settings: false,
      notifications: false,
      [key]: isChecked,
    });
  };

  const toggleTheme = () => {
    if (theme === E_THEME.lightMode) return setTheme(E_THEME.darkMode);
    setTheme(E_THEME.lightMode);
  };

  useEffect(() => {
    setMedia(window.innerWidth);

    // TODO - ao montar o sidebar, seria interessante buscar quantos aniversariantes tem no mês
    if (location.pathname !== "/")
      setNavChecked({
        ...navChecked,
        [location.pathname.replace("/", "")]: true,
      });
    else
      setNavChecked({
        ...navChecked,
        home: true,
      });
  }, []);

  return (
    <div style={{height: "100%"}}>
      <ToastContainer
        position="top-right"
        theme={theme === E_THEME.darkMode ? "dark" : "light"}
      />

      <S.ContainerSidebar className={theme}>
        <S.ContentSidebar $isExpanded={isExpanded} onClick={closeIfClickEmpty}>
          <S.Sidebar
            className="sidebar"
            $isExpanded={isExpanded}
            onMouseEnter={handleEnterSidebar}
            onMouseLeave={handleLeaveSidebar}
            $theme={theme}
          >
            <S.ContentHeader>
              <S.Logo src="profileImage.png" alt="logo user" />
            </S.ContentHeader>

            <S.ContentNavAndFooter>
              <S.Ul>
                <S.Li onClick={() => navigate("/")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="home"
                    $theme={theme}
                    checked={navChecked.home}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "home")
                    }
                  />

                  <S.ContentNavItems htmlFor="home">
                    <S.IconAndTitle>
                      <IoHomeOutline size={17} />
                      <S.NavItem>Home</S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>

                <S.Li onClick={() => navigate("/registers")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="register"
                    $theme={theme}
                    checked={navChecked.registers}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "registers")
                    }
                  />

                  <S.ContentNavItems htmlFor="register">
                    <S.IconAndTitle>
                      <FiUserPlus size={17} />
                      <S.NavItem>Registros</S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>

                <S.Li onClick={() => navigate("/sales")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="sales"
                    $theme={theme}
                    checked={navChecked.sales}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "sales")
                    }
                  />

                  <S.ContentNavItems htmlFor="sales">
                    <S.IconAndTitle>
                      <FiShoppingCart size={17} />
                      <S.NavItem>Vendas</S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>

                <S.Li onClick={() => navigate("/financial")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="financial"
                    $theme={theme}
                    checked={navChecked.financial}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "financial")
                    }
                  />

                  <S.ContentNavItems htmlFor="financial">
                    <S.IconAndTitle>
                      <FaRegMoneyBillAlt size={17} />
                      <S.NavItem>Financeiro</S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>

                <S.Li onClick={() => navigate("/profile")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="profile"
                    $theme={theme}
                    checked={navChecked.profile}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "profile")
                    }
                  />

                  <S.ContentNavItems htmlFor="profile">
                    <S.IconAndTitle>
                      <CgProfile size={17} />
                      <S.NavItem>Perfil</S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>

                <hr style={{ color: "whitesmoke" }} />

                <S.Li onClick={() => navigate("/schedule")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="schedule"
                    $theme={theme}
                    checked={navChecked.schedule}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "schedule")
                    }
                  />

                  <S.ContentNavItems htmlFor="schedule">
                    <S.IconAndTitle>
                      <BsCalendar2Week size={17} />
                      <S.NavItem>Agenda</S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>

                <S.Li onClick={() => navigate("/settings")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="settings"
                    $theme={theme}
                    checked={navChecked.settings}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "settings")
                    }
                  />

                  <S.ContentNavItems htmlFor="settings">
                    <S.IconAndTitle>
                      <BsGear size={17} />
                      <S.NavItem>Configurações</S.NavItem>
                    </S.IconAndTitle>
                  </S.ContentNavItems>
                </S.Li>

                <S.Li onClick={() => navigate("/notifications")}>
                  <S.InputRadio
                    type="radio"
                    name="default"
                    id="notifications"
                    $theme={theme}
                    checked={navChecked.notifications}
                    onChange={({ target }) =>
                      handleChangeNav(target.checked, "notifications")
                    }
                  />

                  <S.ContentNavItemsNotification htmlFor="notifications">
                    <S.IconAndTitle>
                      <MdOutlineNotificationsActive size={17} />
                      <S.NavItem>Notificações</S.NavItem>
                    </S.IconAndTitle>

                    <S.NumberOfNotifications $isExpanded={isExpanded}>
                      23
                    </S.NumberOfNotifications>
                  </S.ContentNavItemsNotification>
                </S.Li>
              </S.Ul>

              <div style={{ width: "100%", position: "relative" }}>
                <S.ContainerSelectTheme>
                  <S.ContentSelectTheme $theme={theme} onClick={toggleTheme}>
                    {theme === E_THEME.darkMode ? (
                      <PiSunFill
                        size={!isExpanded ? 20 : 25}
                        color="black"
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <PiMoonFill
                        size={!isExpanded ? 20 : 25}
                        color="white"
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </S.ContentSelectTheme>
                </S.ContainerSelectTheme>

                <S.NavFooter>
                  <S.ContainerProfile>
                    <S.ImgProfile src="profileImage.png" alt="logo user" />

                    <div
                      className="contentProfileTitles"
                      style={{ width: "100%" }}
                    >
                      <S.TitleProfile>Olá</S.TitleProfile>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <S.UserName>BMS Softwares</S.UserName>
                        <SlOptionsVertical
                          className="menuProfile"
                          size={17}
                          color="#0000006e"
                          cursor={"pointer"}
                        />
                      </div>
                    </div>
                  </S.ContainerProfile>
                </S.NavFooter>
              </div>
            </S.ContentNavAndFooter>
          </S.Sidebar>

          <S.ContentIconLock
            $isExpanded={isExpanded}
            onClick={handleLockSidebar}
          >
            {lockSidebar ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <S.IconLock size={18} />
                <S.IconMenuMobal size={22} className="menu" />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <S.IconLockOpen size={18} />
                <S.IconMenuMobal size={22} className="menu" />
              </div>
            )}
          </S.ContentIconLock>
        </S.ContentSidebar>

        <div style={{ width: "100%" }}>{children}</div>
      </S.ContainerSidebar>
    </div>
  );
}
