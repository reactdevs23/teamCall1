import { useState } from "react";
import MainComponent from "./components/MainComponent/MainComponent";
import Icon from "./images/Icon";
import Completed from "./images/Completed";
import CurrenTask from "./images/CurrenTask";
import Blocker from "./images/Blocker";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#fff",
    header: {
      subHeading: "Thursday, 8. Feb 2024",
      subHeadingColor: "#155EEF",
      heading: "Team Call Updates",
      headingColor: "#000",
    },
    users: [
      {
        name: "CW",
        color: "#fff",
        fullName: "CHRISTOPHER WHITE",

        bg: "#7F56D9",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "ZP",
        color: "#fff",
        fullName: "ZEYNEP PARTH",

        bg: "#444CE7",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              text: "Random note Lorem ipsum",
              color: "#000",
            },
            {
              text: "Random Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "BZ",
        color: "#fff",
        fullName: "BARRY ZEIGER",

        bg: "#155EEF",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "RT",
        color: "#fff",
        fullName: "ROBERT TILL",

        bg: "#1570EF",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "BV",
        color: "#fff",
        fullName: "BRIGITTE VAKEY",
        bg: "#0086C9",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },

      {
        name: "MK",
        color: "#fff",
        fullName: "MICHAEL KEUGEL",

        bg: "#088AB2",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              text: "Random note Lorem ipsum",
              color: "#000",
            },
            {
              text: "Random Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "UV",
        color: "#fff",
        fullName: "UMA VAMAZ",

        bg: "#0E9384",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
    ],
    projectUpdates: {
      border: "1px solid #D0D5DD",
      bg: "#fff",

      header: {
        title: "Project Updates",
        titleColor: "#000",
        bg: "#FFF",
        border: "1px solid #D0D5DD",
        steps: [
          {
            circles: [{ bg: "#32D583" }, { bg: "#32D583" }, { bg: "#32D583" }],
            circlesContainerBorder: "0.647px solid #D0D5DD",
            circlesContainerBg: "#fff",
            label: "Complete",
            labelColor: "#667085",
          },
          {
            circles: [
              { bg: "#32D583" },
              { bg: "#32D583" },
              { bg: "#32D583", opacity: ".3" },
            ],
            circlesContainerBorder: "0.647px solid #D0D5DD",
            circlesContainerBg: "#fff",
            label: "On track",
            labelColor: "#667085",
          },
          {
            circles: [
              { bg: "#FEC84B" },
              { bg: "#FEC84B", opacity: ".3" },
              { bg: "#FEC84B", opacity: ".3" },
            ],
            circlesContainerBorder: "0.647px solid #D0D5DD",
            circlesContainerBg: "#fff",
            label: "Minor issues",
            labelColor: "#667085",
          },
          {
            circles: [
              { bg: "#F97066", opacity: ".3" },
              { bg: "#F97066", opacity: ".3" },
              { bg: "#F97066", opacity: ".3" },
            ],
            circlesContainerBorder: "0.647px solid #D0D5DD",
            circlesContainerBg: "#fff",
            label: "Major blockers",
            labelColor: "#667085",
          },
        ],
      },
      projects: [
        {
          bg: "#F2F4F7",
          projectHeader: {
            icon: <Icon color="#000" />,
            projectName: "Name of project",
            projectNameColor: "#000",
            border: "1px solid #D0D5DD",
          },
          info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam",
          infoColor: "#000",
          listColor: "#000",
          lists: [
            "Key task short description elitr diam",

            "Key task short description elitr sed",

            "Key task short description diam",
          ],
          highlight: {
            title: "Highlights",
            titleColor: "#039855",
            bg: "#DFF1EB",
            listColor: "#000",
            lists: ["Key task short description elitr diam"],
          },
          issues: "",
          blocker: "",
          projectFooter: {
            users: [
              { name: "ZP", color: "#fff", bg: "#444CE7" },
              { name: "CW", color: "#fff", bg: "#7F56D9" },
              { name: "BZ", color: "#fff", bg: "#155EEF" },
              { name: "RT", color: "#fff", bg: "#1570EF" },
              { name: "MK", color: "#fff", bg: "#088AB2" },
            ],
          },
        },
        {
          bg: "#F2F4F7",
          projectHeader: {
            icon: <Icon color="#000" />,
            projectName: "Name of project",
            projectNameColor: "#000",
            border: "1px solid #D0D5DD",
          },
          info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam",
          infoColor: "#000",
          listColor: "#000",
          lists: [
            "Key task short description elitr diam",

            "Key task short description elitr sed",

            "Key task short description diam",
          ],
          highlight: "",
          issues: {
            title: "ISSUES",
            titleColor: "#B54708",
            bg: "#F7ECCB",
            listColor: "#000",
            lists: [
              "Key task short description elitr diam",
              "Key task short description diam",
            ],
          },
          blocker: "",
          projectFooter: {
            users: [
              { name: "RT", color: "#fff", bg: "#1570EF" },
              { name: "MK", color: "#fff", bg: "#088AB2" },
            ],
            step: {
              circles: [
                { bg: "#32D583" },
                { bg: "#32D583" },
                { bg: "#32D583", opacity: "0.3" },
              ],

              bg: "#fff",
            },
          },
        },
        {
          bg: "#F2F4F7",
          projectHeader: {
            icon: <Icon color="#000" />,
            projectName: "Name of project",
            projectNameColor: "#000",
            border: "1px solid #D0D5DD",
          },
          info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam",
          infoColor: "#000",
          listColor: "#000",
          lists: [
            "Key task short description elitr diam",

            "Key task short description elitr sed",

            "Key task short description diam",
          ],
          highlight: "",
          issues: {
            title: "ISSUES",
            titleColor: "#B54708",
            bg: "#F7ECCB",
            listColor: "#000",
            lists: [
              "Key task short description elitr diam",
              "Key task short description diam",
            ],
          },
          blocker: "",
          projectFooter: {
            users: [
              { name: "ZP", color: "#fff", bg: "#444CE7" },
              { name: "CW", color: "#fff", bg: "#7F56D9" },
              { name: "BZ", color: "#fff", bg: "#155EEF" },
            ],
            step: {
              circles: [
                { bg: "#32D583" },
                { bg: "#32D583" },
                { bg: "#32D583", opacity: "0.3" },
              ],

              bg: "#fff",
            },
          },
        },

        {
          bg: "#F2F4F7",
          projectHeader: {
            icon: <Icon color="#000" />,
            projectName: "Name of project",
            projectNameColor: "#000",
            border: "1px solid #D0D5DD",
          },
          info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam",
          infoColor: "#000",
          listColor: "#000",
          lists: [
            "Key task short description elitr diam",

            "Key task short description elitr sed",

            "Key task short description diam",
          ],
          highlight: "",
          issues: "",
          blocker: {
            title: "BLOCKER",
            titleColor: "#B42318",
            bg: "#F2DADA",
            listColor: "#000",
            lists: ["Key task short description elitr diam"],
          },
          projectFooter: {
            users: [
              { name: "ZP", color: "#fff", bg: "#444CE7" },

              { name: "BZ", color: "#fff", bg: "#155EEF" },
            ],
            step: {
              circles: [
                { bg: "#32D583" },
                { bg: "#32D583" },
                { bg: "#32D583", opacity: "0.3" },
              ],

              bg: "#fff",
            },
          },
        },
      ],
    },
    individualContributions: {
      bg: "#fff",
      border: "1px solid #D0D5DD",
      header: {
        title: "Individual Contributions",
        titleColor: "#000",
        bg: "#FFF",
        border: "1px solid #D0D5DD",
        status: [
          {
            icon: <Completed color="#fff" bg="#32D583" />,
            label: "Completed",
            labelColor: "#000",
          },
          {
            icon: <CurrenTask color="#fff" bg="#FEC84B" />,
            label: "Current task",
            labelColor: "#000",
          },
          {
            icon: <Blocker color="#fff" bg="#FDA29B" />,
            label: "Blocker",
            labelColor: "#000",
          },
        ],
      },
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
