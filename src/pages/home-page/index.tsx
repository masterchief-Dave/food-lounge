import Footer from "@/components/layout/footer";
import Header from "@/components/organisms/header";
import NewsCard from "@/components/organisms/news-card";
import RestaurantLocator from "@/components/organisms/restaurant-locator";
import newsData from "@/extensions/data/news.data";

const Homepage = () => {
  return (
    <div className="space-y-24">
      <Header />
      <RestaurantLocator />
      <div className="grid grid-cols-3 gap-28">
        {newsData.map((news, index) => (
          <NewsCard
            description={news.description}
            picture={news.picture}
            title={news.title}
            key={index}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
