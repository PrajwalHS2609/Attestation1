"use client"; // Add this at the top to mark the file as a Client Component

import { usePathname } from "next/navigation"; // Importing usePathname for Client Components
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniXMark } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRef, useState } from "react";

const Menu = () => {
  const pathname = usePathname();
  const [drop, setDrop] = useState(false);
  const dropRef = useRef<HTMLDivElement | null>(null); // Explicitly typed ref
  const dropRef2 = useRef<HTMLDivElement | null>(null); // Explicitly typed ref
  const dropRef3 = useRef<HTMLDivElement | null>(null); // Explicitly typed ref
  const dropRef4 = useRef<HTMLDivElement | null>(null); // Explicitly typed ref

  // const handlePopUp = () => {};
  const hideSideBar = () => {
    const exit = document.querySelector(".exit") as HTMLElement;
    const sideBar = document.querySelector(".resp-Menu") as HTMLElement;
    // sideBar.style.height = "0%";
    sideBar.style.visibility = "hidden";
    sideBar.style.opacity = "0";
    sideBar.style.transform = "translateX(100%)";
    exit.style.display = "none";
  };
  const showSideBar = () => {
    const exit = document.querySelector(".exit") as HTMLElement;
    const sideBar = document.querySelector(".resp-Menu") as HTMLElement;
    // sideBar.style.height = "fit-content";
    sideBar.style.visibility = "visible";
    sideBar.style.opacity = "1";
    sideBar.style.transform = "translateX(0px)";
    exit.style.display = "block";
  };
  const handleDrop = () => {
    const plus = document.querySelector(".plus") as HTMLElement | null;

    // Ensure dropRef.current is not null
    if (dropRef.current) {
      if (!drop) {
        setDrop(true);
        dropRef.current.style.display = "flex"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(45deg)";
        }
      } else {
        setDrop(false);
        dropRef.current.style.display = "none"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(0)";
        }
      }
    } else {
      console.error("dropRef is null or not attached to an element");
    }
  };
  const handleDrop2 = () => {
    const plus = document.querySelector(".plus1") as HTMLElement | null;
    // Ensure dropRef.current is not null
    if (dropRef2.current) {
      if (!drop) {
        setDrop(true);
        dropRef2.current.style.display = "flex"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(45deg)";
        }
      } else {
        setDrop(false);
        dropRef2.current.style.display = "none"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(0)";
        }
      }
    } else {
      console.error("dropRef is null or not attached to an element");
    }
  };
  const handleDrop3 = () => {
    const plus = document.querySelector(".plus2") as HTMLElement | null;
    // Ensure dropRef.current is not null
    if (dropRef3.current) {
      if (!drop) {
        setDrop(true);
        dropRef3.current.style.display = "flex"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(45deg)";
        }
      } else {
        setDrop(false);
        dropRef3.current.style.display = "none"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(0)";
        }
      }
    } else {
      console.error("dropRef is null or not attached to an element");
    }
  };
  const handleDrop4 = () => {
    const plus = document.querySelector(".plus3") as HTMLElement | null;
    // Ensure dropRef.current is not null
    if (dropRef4.current) {
      if (!drop) {
        setDrop(true);
        dropRef4.current.style.display = "flex"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(45deg)";
        }
      } else {
        setDrop(false);
        dropRef4.current.style.display = "none"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(0)";
        }
      }
    } else {
      console.error("dropRef is null or not attached to an element");
    }
  };
  const apostilleMenu = [
    {
      id: "1",
      pathName: "degree-certificate-apostille-in-bangalore",
      menu: "Education Certificate",
    },
    {
      id: "2",
      pathName: "/commercial-documents-apostille-in-bangalore",
      menu: "Non-Education Certificate",
    },
  ];
  const attestationMenu = [
    {
      id: "1",
      pathName: "/degree-certificate-attestation-in-bangalore",
      menu: "Education Certificate",
    },
    {
      id: "2",
      pathName: "/commercial-documents-attestation-in-bangalore",
      menu: "Non-Education Certificate",
    },
  ];
  const stateHrd = [
    {
      id: "1",
      pathName: "/karnataka-state-hrd-attestation-in-bangalore",
      menu: "Karnataka",
    },
    {
      id: "2",
      pathName: "/tamil-nadu-state-hrd-attestation-in-bangalore",
      menu: "Tamil Nadu",
    },
    {
      id: "3",
      pathName: "/kerala-state-hrd-attestation-in-bangalore",
      menu: "Kerala",
    },
    {
      id: "4",
      pathName: "/andhra-pradesh-state-hrd-attestation-in-bangalore",
      menu: "Andhra Pradesh",
    },
    {
      id: "5",
      pathName: "/maharashtra-state-hrd-attestation-in-bangalore",
      menu: "Maharastra",
    },
    {
      id: "6",
      pathName: "/telangana-state-hrd-attestation-in-bangalore",
      menu: "Telangana",
    },
  ];
  const pcc = [
    {
      id: "1",
      pathName: "/oman-pcc-verification-in-bangalore",
      menu: "Oman Pcc",
    },
    {
      id: "2",
      pathName: "/kuwait-pcc-verification-in-bangalore",
      menu: "Kuwait Pcc",
    },
    {
      id: "3",
      pathName: "/saudi-arabia-pcc-verification-in-bangalore",
      menu: "Saudi Pcc",
    },
    {
      id: "4",
      pathName: "/qatar-pcc-verification-in-bangalore",
      menu: "Qatar Pcc",
    },
    {
      id: "5",
      pathName: "/uae-pcc-verification-in-bangalore",
      menu: "UAE Pcc",
    },
  ];
  return (
    <div className="menu-container">
      <div className="menu-content1">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/attestation-services-in-bangalore"
            className={
              pathname === "/attestation-services-in-bangalore" ? "active" : ""
            }
          >
            Attestation
            <MdKeyboardArrowDown className="serviceIco" />
          </Link>
          <div className="menuDrop-container">
            <ul>
              {attestationMenu.map((x) => (
                <li key={x.id}>
                  <Link
                    href={x.pathName}
                    className={pathname === x.pathName ? "active" : ""}
                  >
                    {x.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <Link
            href="/apostille-services-in-bangalore"
            className={
              pathname === "/apostille-services-in-bangalore" ? "active" : ""
            }
          >
            Apostille
            <MdKeyboardArrowDown className="serviceIco" />
          </Link>
          <div className="menuDrop-container">
            <ul>
              {apostilleMenu.map((x) => (
                <li key={x.id}>
                  <Link
                    href={x.pathName}
                    className={pathname === x.pathName ? "active" : ""}
                  >
                    {x.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <Link
            href="/state-hrd-attestation-in-bangalore"
            className={
              pathname === "/state-hrd-attestation-in-bangalore" ? "active" : ""
            }
          >
            State HRD <MdKeyboardArrowDown className="serviceIco" />
          </Link>
          <div className="menuDrop-container">
            <ul>
              {stateHrd.map((x) => (
                <li key={x.id}>
                  <Link
                    href={x.pathName}
                    className={pathname === x.pathName ? "active" : ""}
                  >
                    {x.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <Link
            href="/mofa-attestation-in-bangalore"
            className={
              pathname === "/mofa-attestation-in-bangalore" ? "active" : ""
            }
          >
            MOFA{" "}
          </Link>
        </li>
        <li>
          <Link
            href="/pcc-verification-in-bangalore"
            className={
              pathname === "/pcc-verification-in-bangalore" ? "active" : ""
            }
          >
            PCC <MdKeyboardArrowDown className="serviceIco" />
          </Link>
          <div className="menuDrop-container">
            <ul>
              {pcc.map((x) => (
                <li key={x.id}>
                  <Link
                    href={x.pathName}
                    className={pathname === x.pathName ? "active" : ""}
                  >
                    {x.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <Link
            href="/mea-apostille-services-in-bangalore"
            className={
              pathname === "/mea-apostille-services-in-bangalore"
                ? "active"
                : ""
            }
          >
            MEA{" "}
          </Link>
        </li>
        <li>
          <Link
            href="/wes-verification-attestation-in-bangalore"
            className={
              pathname === "/wes-verification-attestation-in-bangalore"
                ? "active"
                : ""
            }
          >
            WES{" "}
          </Link>
        </li>
        <li>
          <Link
            href="/visa-stamping-services-in-bangalore"
            className={
              pathname === "/visa-stamping-services-in-bangalore"
                ? "active"
                : ""
            }
          >
            Visa Stamping{" "}
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/contact-us"
            className={pathname === "/contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>
            Blog
          </Link>
        </li>
      </div>
      {/* -----------------------respMenu------------------------------- */}
      <div className="menu-content2">
        <MdMenu className="menuIcon" onClick={showSideBar} />
        <div className="resp-Menu">
          <div className="inner-RespMenu">
            <li>
              <div className="inner-RespMenuHead">
                {/* <Image src={logo} alt="logo" className="respIcon" /> */}
                <HiMiniXMark
                  className="innerResp-MenuHeadIco"
                  onClick={hideSideBar}
                />
              </div>{" "}
              <Link
                href="/"
                className={pathname === "/" ? "active" : ""}
                onClick={hideSideBar}
              >
                Home
              </Link>
            </li>
            <li>
              <div className="respMenuList">
                <Link
                  href="/attestation-services-in-bangalore"
                  className={
                    pathname === "/attestation-services-in-bangalore"
                      ? "active"
                      : ""
                  }
                  onClick={hideSideBar}
                >
                  Attestation{" "}
                </Link>
                <span>
                  <AiOutlinePlus className="plus" onClick={handleDrop} />
                </span>
              </div>
              {/* ---------------------------respDropDown-------------------------------------------- */}
              <div className="respDrop" ref={dropRef}>
                <ul>
                  {attestationMenu.map((x) => (
                    <li key={x.id}>
                      <Link
                        href={x.pathName}
                        className={pathname === x.pathName ? "active" : ""}
                        onClick={hideSideBar}
                      >
                        {x.menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <div className="respMenuList">
                <Link
                  href="/apostille-services-in-bangalore"
                  className={
                    pathname === "/apostille-services-in-bangalore"
                      ? "active"
                      : ""
                  }
                  onClick={hideSideBar}
                >
                  Apostille
                </Link>
                <span>
                  <AiOutlinePlus className="plus1" onClick={handleDrop2} />
                </span>
              </div>
              {/* ---------------------------respDropDown-------------------------------------------- */}
              <div className="respDrop" ref={dropRef2}>
                <ul>
                  {apostilleMenu.map((x) => (
                    <li key={x.id}>
                      <Link
                        href={x.pathName}
                        className={pathname === x.pathName ? "active" : ""}
                        onClick={hideSideBar}
                      >
                        {x.menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li id="respDropList">
              <div className="respMenuList">
                {" "}
                <Link
                  href="/state-hrd-attestation-in-bangalore"
                  className={
                    pathname === "/state-hrd-attestation-in-bangalore"
                      ? "active"
                      : ""
                  }
                  onClick={hideSideBar}
                >
                  State HRD{" "}
                </Link>
                <span>
                  <AiOutlinePlus className="plus2" onClick={handleDrop3} />
                </span>
              </div>
              <div className="respDrop" ref={dropRef3}>
                <ul>
                  {stateHrd.map((x) => (
                    <li key={x.id}>
                      <Link
                        href={x.pathName}
                        className={pathname === x.pathName ? "active" : ""}
                        onClick={hideSideBar}
                      >
                        {x.menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              {" "}
              <Link
                href="/mofa-attestation-in-bangalore"
                className={
                  pathname === "/mofa-attestation-in-bangalore" ? "active" : ""
                }
                onClick={hideSideBar}
              >
                MOFA
              </Link>
            </li>

            <li id="respDropList">
              <div className="respMenuList">
                {" "}
                <Link
                  href="/pcc-verification-in-bangalore"
                  className={
                    pathname === "/pcc-verification-in-bangalore"
                      ? "active"
                      : ""
                  }
                  onClick={hideSideBar}
                >
                  PCC
                </Link>
                <span>
                  <AiOutlinePlus className="plus3" onClick={handleDrop4} />
                </span>
              </div>
              <div className="respDrop" ref={dropRef4}>
                <ul>
                  {pcc.map((x) => (
                    <li key={x.id}>
                      <Link
                        href={x.pathName}
                        className={pathname === x.pathName ? "active" : ""}
                        onClick={hideSideBar}
                      >
                        {x.menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              {" "}
              <Link
                href="/mea-apostille-services-in-bangalore"
                className={
                  pathname === "/mea-apostille-services-in-bangalore"
                    ? "active"
                    : ""
                }
                onClick={hideSideBar}
              >
                MEA
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/wes-verification-attestation-in-bangalore"
                className={
                  pathname === "/wes-verification-attestation-in-bangalore"
                    ? "active"
                    : ""
                }
                onClick={hideSideBar}
              >
                WES
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/visa-stamping-services-in-bangalore"
                className={
                  pathname === "/visa-stamping-services-in-bangalore"
                    ? "active"
                    : ""
                }
                onClick={hideSideBar}
              >
                Visa Stamping
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/contact-us"
                className={pathname === "/contact-us" ? "active" : ""}
                onClick={hideSideBar}
              >
                Contact Us
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/blog"
                className={pathname === "/blog" ? "active" : ""}
                onClick={hideSideBar}
              >
                Blog
              </Link>
            </li>
            <li className="menuContainerBtn-Container">
              <div className="menuContainerBtn">
                {" "}
                <Link href="/">
                  <button>SPEAK TO EXPERT </button>
                </Link>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
