export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Data Analysis & Data Science</h3>
          <ul className="list-disc ml-6">
            <li>Power BI (DAX, dashboards)</li>
            <li>Tableau</li>
            <li>Microsoft Excel</li>
            <li>Exploratory Data Analysis (EDA)</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Programming</h3>
          <ul className="list-disc ml-6">
            <li>Python (Pandas, NumPy, Matplotlib)</li>
            <li>SQL (basic querying)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
