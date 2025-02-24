// App.js
import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import componentMetadata from "./componentMetadata"; // Import metadata

function App() {
  const [muiVersion, setMuiVersion] = useState("Loading...");
  const [selectedComponent, setSelectedComponent] = useState(
    Object.keys(componentMetadata)[0]
  );
  const [componentProps, setComponentProps] = useState(
    componentMetadata[selectedComponent].defaultProps
  );

  useEffect(() => {
    import("@mui/material/package.json")
      .then((pkg) => {
        setMuiVersion(pkg.default.version);
      })
      .catch((err) => {
        console.error("Error fetching MUI version:", err);
      });
  }, []);

  // Update component props when selected component changes
  useEffect(() => {
    setComponentProps(componentMetadata[selectedComponent].defaultProps);
  }, [selectedComponent]);

  const handlePropChange = (propName, value) => {
    setComponentProps((prevProps) => ({
      ...prevProps,
      [propName]: value,
    }));
  };

  const SelectedComponent = componentMetadata[selectedComponent].component;

  return (
    <div className={styles.App}>
      {/* Left Section: Intro */}
      <div className={styles.Intro}>
        <h1>React Component Playground</h1>
        <p>
          Select a component from the dropdown to test it in this environment.
        </p>
        <p>
          <strong>React Version:</strong> {React.version}
        </p>
        <p>
          <strong>MUI Version:</strong> {muiVersion}
        </p>
      </div>

      {/* Right Section: Dropdown + Component Rendering */}
      <div className={styles.RightPanel}>
        <div className={styles.SelectWrapper}>
          <label htmlFor="componentSelect">Choose a Component:</label>
          <select
            id="componentSelect"
            className={styles.Dropdown}
            value={selectedComponent}
            onChange={(e) => setSelectedComponent(e.target.value)}
          >
            {Object.keys(componentMetadata).map((component) => (
              <option key={component} value={component}>
                {component}
              </option>
            ))}
          </select>
        </div>

        {/* Dynamic Props Editor */}
        <div className={styles.PropsEditor}>
          {componentMetadata[selectedComponent].editableProps.map((prop) => (
            <div key={prop.name} className={styles.PropField}>
              <label htmlFor={prop.name}>{prop.label || prop.name}:</label>
              {prop.type === "select" ? (
                <select
                  id={prop.name}
                  value={componentProps[prop.name]}
                  onChange={(e) => handlePropChange(prop.name, e.target.value)}
                >
                  {prop.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  id={prop.name}
                  value={componentProps[prop.name]}
                  onChange={(e) => handlePropChange(prop.name, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>

        {/* Render the selected component with the current props */}
        <div className={styles.RenderArea}>
          <SelectedComponent {...componentProps} />
        </div>
      </div>
    </div>
  );
}

export default App;
