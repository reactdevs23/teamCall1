import React from "react";
import classes from "./MainComponent.module.css";
import Curve from "../../images/Curve";

const MainComponent = ({
  header: mainHeader,
  users,
  headingFontFamily,
  projectUpdates,
  individualContributions,
}) => {
  const { header, projects, bg, border } = projectUpdates;

  return (
    <div
      className="min-h-screen py-5 flex flex-col items-center justify-center gap-12 w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper}>
        {" "}
        <div className={classes.header}>
          <div className={classes.headingContainer}>
            <h5
              className={classes.subHeading}
              style={{ "--color": mainHeader.subHeadingColor }}
            >
              {mainHeader.subHeading}
            </h5>
            <h2
              className={classes.heading}
              style={{
                "--color": mainHeader.headingColor,
                "--fontFamily": headingFontFamily,
              }}
            >
              {mainHeader.heading}
            </h2>
          </div>
          <div className={classes.usersContainer}>
            {users?.map((user, i) => (
              <p
                className={classes.user}
                key={i}
                style={{
                  "--color": user.color,
                  "--bg": user.bg,
                  zIndex: i !== users.length ? users.length - i : 0,
                }}
              >
                {user.name}
              </p>
            ))}
          </div>
        </div>
        <div
          className={[
            classes.wrapper,
            !individualContributions && classes.wrapper2,
          ].join(" ")}
        >
          <div
            className={classes.projectUpdatesContainer}
            style={{ "--bg": bg, "--border": border }}
          >
            <div
              className={classes.projectUpdatesHeader}
              style={{ "--border": header.border }}
            >
              <h3
                className={classes.title}
                style={{
                  "--bg": header.bg,
                  "--color": header.titleColor,
                }}
              >
                {header.title}
              </h3>
              <div className={classes.steps}>
                {header?.steps?.map((step, stepId) => (
                  <div key={stepId} className={classes.step}>
                    <div
                      className={classes.circles}
                      style={{
                        "--border": step.circlesContainerBorder,
                        "--bg": step.circlesContainerBg,
                      }}
                    >
                      {step?.circles?.map((el, i) => (
                        <div
                          className={classes.circle}
                          key={i}
                          style={{ "--bg": el.bg, "--opacity": el.opacity }}
                        ></div>
                      ))}
                    </div>
                    <p
                      className={classes.label}
                      style={{ "--color": step.labelColor }}
                    >
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={[
                classes.projects,
                individualContributions ? "columns-2" : "columns-3",
              ].join(" ")}
            >
              {projects?.map(
                (
                  {
                    bg,
                    projectHeader,
                    info,
                    infoColor,
                    listColor,
                    lists,
                    highlight,
                    issues,
                    blocker,
                    projectFooter,
                  },
                  i
                ) => (
                  <div
                    className={[classes.project, "break-inside-avoid"].join(
                      " "
                    )}
                    style={{ "--bg": bg }}
                    key={i}
                  >
                    <div
                      className={classes.projectHeader}
                      style={{ "--border": projectHeader.border }}
                    >
                      <div className={classes.icon}>{projectHeader.icon}</div>{" "}
                      <h5
                        className={classes.name}
                        style={{ "--color": projectHeader.projectNameColor }}
                      >
                        {projectHeader.projectName}
                      </h5>
                    </div>
                    <div className={classes.projectContent}>
                      {" "}
                      <p
                        className={classes.info}
                        style={{ "--color": infoColor }}
                      >
                        {info}
                      </p>
                      <div className={classes.listContainer}>
                        {lists?.map((list, listId) => (
                          <li
                            key={listId}
                            className={classes.list}
                            style={{ "--color": listColor }}
                          >
                            {list}
                          </li>
                        ))}
                      </div>{" "}
                      {highlight && (
                        <div
                          className={classes.highLight}
                          style={{ "--bg": highlight.bg }}
                        >
                          <h6
                            className={classes.title}
                            style={{ "--color": highlight.titleColor }}
                          >
                            {highlight.title}
                          </h6>
                          <div className={classes.listContainer}>
                            {highlight?.lists?.map((list, i) => (
                              <li
                                key={i}
                                className={classes.list}
                                style={{ "--color": highlight.listColor }}
                              >
                                {list}
                              </li>
                            ))}
                          </div>
                        </div>
                      )}{" "}
                      {issues && (
                        <div
                          className={classes.issues}
                          style={{ "--bg": issues.bg }}
                        >
                          <h6
                            className={classes.title}
                            style={{ "--color": issues.titleColor }}
                          >
                            {issues.title}
                          </h6>
                          <div className={classes.listContainer}>
                            {issues?.lists?.map((list, i) => (
                              <li
                                key={i}
                                className={classes.list}
                                style={{ "--color": issues.listColor }}
                              >
                                {list}
                              </li>
                            ))}
                          </div>
                        </div>
                      )}
                      {blocker && (
                        <div
                          className={classes.blocker}
                          style={{ "--bg": blocker.bg }}
                        >
                          <h6
                            className={classes.title}
                            style={{ "--color": blocker.titleColor }}
                          >
                            {blocker.title}
                          </h6>
                          <div className={classes.listContainer}>
                            {blocker?.lists?.map((list, i) => (
                              <li
                                key={i}
                                className={classes.list}
                                style={{ "--color": blocker.listColor }}
                              >
                                {list}
                              </li>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className={classes.projectFooter}>
                        <div className={classes.users}>
                          {projectFooter?.users?.map((user, i) => (
                            <p
                              className={classes.user}
                              key={i}
                              style={{ "--bg": user.bg, "--color": user.color }}
                            >
                              {user.name}
                            </p>
                          ))}
                        </div>
                        {projectFooter.step && (
                          <div
                            className={classes.step}
                            style={{ "--bg": projectFooter.step.bg }}
                          >
                            {projectFooter?.step?.circles?.map((el, i) => (
                              <div
                                className={classes.circle}
                                key={i}
                                style={{
                                  "--bg": el.bg,
                                  "--opacity": el.opacity,
                                }}
                              ></div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {individualContributions && (
            <div
              className={classes.individualContributions}
              style={{
                "--bg": individualContributions.bg,
                "--border": individualContributions.border,
              }}
            >
              <div
                className={classes.individualContributionsHeader}
                style={{ "--border": individualContributions.header.border }}
              >
                <h3
                  className={classes.title}
                  style={{
                    "--bg": individualContributions.header.bg,
                    "--color": individualContributions.header.titleColor,
                  }}
                >
                  {individualContributions.header.title}
                </h3>
                <div className={classes.statusContainer}>
                  {individualContributions?.header?.status?.map((status, i) => (
                    <div className={classes.status} key={i}>
                      <div className={classes.icon}>{status.icon}</div>
                      <p
                        className={classes.label}
                        style={{ "--color": status.labelColor }}
                      >
                        {status.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={classes.contributionsWrapper}>
                {users?.map((user, userId) => (
                  <div key={userId} className={classes.contribution}>
                    <p
                      className={classes.user}
                      style={{
                        "--color": user.color,
                        "--bg": user.bg,
                      }}
                    >
                      {user.name}
                    </p>
                    <div className={classes.infoContainer}>
                      <p
                        className={classes.name}
                        style={{
                          "--color": user.bg,
                          "--bg": user.bg,
                        }}
                      >
                        {user.fullName}
                      </p>
                      <div
                        className={classes.listContainer}
                        style={{ "--bg": user.listContainer.bg }}
                      >
                        <div className={classes.curve}>
                          <Curve bg={user.listContainer.bg} />
                        </div>
                        {user?.listContainer?.lists?.map((list, i) =>
                          list.icon ? (
                            <div className={classes.singleList} key={i}>
                              <div className={classes.icon}>{list.icon}</div>
                              <p
                                style={{ "--color": list.color }}
                                className={classes.text}
                                key={i}
                              >
                                {list.text}
                              </p>
                            </div>
                          ) : (
                            <li
                              style={{ "--color": list.color }}
                              className={classes.list}
                              key={i}
                            >
                              {list.text}
                            </li>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
