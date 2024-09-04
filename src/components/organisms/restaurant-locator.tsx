import { Input } from "../ui/input";

function RestaurantLocator() {
  return (
    <div className="px-28">
      <div className="rounded-xl p-12 border">
        <div className="flex items-center justify-between">
          <section>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold">Restaurant Locator</h3>
                <p className="text-base">Find a restaurant nearby</p>
              </div>
              <div className="">
                <Input
                  type="text"
                  placeholder="Your Address"
                  className="w-96 h-12 font-medium"
                />
              </div>
            </div>
          </section>
          <section>
            <img
              src="/public/img/map-person.svg"
              alt="location-search"
              className="w-40"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default RestaurantLocator;
