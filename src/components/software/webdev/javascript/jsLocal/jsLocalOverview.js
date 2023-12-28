import React from "react";

const JSLocalOverview = () => {
  const storage = [
    {
      storage: "Cookies",
      limitations: ["Limited storage capacity", "Client-side only"],
      uses: [
        "Storing small amounts of data",
        "Maintaining session information",
        "Authentication",
      ],
      querying: "Limited querying capabilities",
      offline: "Limited offline support",
      persistence: "Clearing cookies",
    },
    {
      storage: "Local Storage",
      limitations: ["Limited storage capacity", "Client-side only"],
      uses: [
        "Persistent storage of key-value data",
        "Storing user preferences",
      ],
      querying: "No built-in querying capabilities",
      offline: "Limited offline support",
      persistence:
        "No explicit deletion method, data persists until cleared by the user or programmatically",
    },
    {
      storage: "IndexedDB",
      limitations: ["No cross-origin access", "Complex API"],
      uses: ["Storing structured data", "Rich querying capabilities"],
      querying: "Advanced querying using indexes and cursors",
      offline: "Full offline support",
      persistence:
        "Explicit deletion using the `delete` method or clearing the entire database",
    },
    {
      storage: "Cache",
      limitations: ["Storage capacity varies", "Temporary storage"],
      uses: ["Caching network resources", "Offline access to cached content"],
      querying: "No querying capabilities",
      offline: "Full offline support (for cached resources)",
      persistence:
        "Cache is cleared automatically by the browser based on caching policies or can be cleared programmatically",
    },
    {
      storage: "OPFS",
      limitations: ["Limited access to origin", "Encrypted storage"],
      uses: [
        "Securely storing private files",
        "Protecting sensitive user data",
      ],
      querying: "Limited querying capabilities",
      offline: "Limited offline support",
      persistence:
        "Explicit deletion of files or clearing the entire file system",
    },
    {
      storage: "JSW?",
      limitations: ["", ""],
      uses: ["", ""],
      querying: "",
      offline: "",
      persistence: "",
    },
  ];

  const renderStorage = storage.map((item) => {
    const limitations = item.limitations.map((limitation) => {
      return <li>{limitation}</li>;
    });
    const uses = item.uses.map((use) => {
      return <li>{use}</li>;
    });
    return (
      <tr>
        <td>{item.storage}</td>
        <td>
          <ol>{limitations}</ol>
        </td>
        <td>
          <ol>{uses}</ol>
        </td>
        <td>{item.querying}</td>
        <td>{item.offline}</td>
        <td>{item.persistance}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Local Persistent Data Options</h1>
      <table>
        <tr>
          <th>Storage</th>
          <th>Limitiations</th>
          <th>Uses</th>
          <th>Querying</th>
          <th>Offline Use</th>
          <th>Persistance</th>
        </tr>
        {renderStorage}
      </table>
    </div>
  );
};

export default JSLocalOverview;
