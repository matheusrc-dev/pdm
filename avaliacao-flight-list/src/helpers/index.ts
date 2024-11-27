export type Passenger = {
  id: number;
  passenger_name: string;
  passenger_avatar: string;
  origin: string;
  destination: string;
};

export const groupPassengersByCountry = (data: Passenger[]) => {
  const grouped: { [key: string]: Passenger[] } = {};

  data.forEach(passenger => {
    const countries = [passenger.origin, passenger.destination];

    countries.forEach(country => {
      if (!grouped[country]) {
        grouped[country] = [];
      }
      grouped[country].push(passenger);
    });
  });

  const sortedPassengers = Object.keys(grouped).map((key) => ({
    title: `${key} (${grouped[key].length})`,
    data: grouped[key],
    isExpanded: false,
  })).sort((a, b) => a.title.localeCompare(b.title))

  return sortedPassengers;
};