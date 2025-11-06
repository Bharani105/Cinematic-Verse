import SeriesCards from "../Component/SeriesCards";
import Usefetch from "../hooks/Usefetch";
import UseDocTitle from "../hooks/UseDocTitle";

const SeriesList = ({ apiPath, title }) => {
  const { data: series } = Usefetch(apiPath);
  UseDocTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap [@media(min-width:340px)_and_(max-width:1200px)]:justify-evenly">
          {series.map((s) => (
            <SeriesCards key={s.id} series={s} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SeriesList;
