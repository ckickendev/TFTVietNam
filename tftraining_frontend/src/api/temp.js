

const loadComps = async () => {
  const response = await fetch(
    "https://api2.metatft.com/tft-comps-api/comps_stats?queue=1100&patch=current&days=2&rank=CHALLENGER,GRANDMASTER&permit_filter_adjustment=true"
  );
  const data = await response.json();
  console.log(data);
  const totalPrequent = data.filter_adjustment.sample_size;
  const unitDataList = [];
  data.results.forEach((element) => {
    let frequency = 0;
    let avgCount = 0;
    let top4Rate = 0;
    element.places.forEach((current, index) => {
      if (index < 8) {
        frequency += current;
        avgCount += current * (index + 1);
      }
      if (index < 4) {
        top4Rate += current;
      }
    });
    const unitData = {
      name: element.cluster,
      frequency: frequency,
      winrate: (element.places[0] / frequency) * 100,
      percentage: (frequency / totalPrequent) * 100,
      avgCount: avgCount / frequency,
      top4Rate: (top4Rate / frequency) * 100,
    };
    unitDataList.push(unitData);
  });
  console.log("data team comps", unitDataList);
};
const loadCompsData = async () => {
  const response = await fetch(
    "https://api2.metatft.com/tft-comps-api/comps_data"
  );
  const data = await response.json();
  console.log(data);
  var arrayData = Object.keys(data.results.data.cluster_details).map(
    (key) => data.results.data.cluster_details[key]
  );
  const comps = arrayData.map((team) => {
    let compsName = "";
    team.name.forEach((e) => {
      const handle = e.name.split("_");
      compsName += " " + handle[1];
    });
    const unitData = {
      champions: team.units_string.split(","),
      builds: team.builds,
      name: compsName,
    };
    return unitData;
  });
  console.log("comps", comps);
};
loadCompsData();
