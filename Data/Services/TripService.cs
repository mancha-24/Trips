using ReactTrips.Data;

namespace ReactTrips.Services
{
    public class TripService : ITripService
    {
        public void AddTrip(Trip trip)
        {
            DataTrips.Trips.Add(trip);
        }

        public void DeleteTrip(int tripId)
        {
            var trip = DataTrips.Trips.FirstOrDefault(c => c.Id == tripId);
            if(trip != null)
            {
                DataTrips.Trips.Remove(trip);
            }

        }

        public List<Trip> GetAllTrips() => DataTrips.Trips.ToList();

        public Trip GetTripById(int tripId) => DataTrips.Trips.FirstOrDefault(c => c.Id == tripId);
        

        public void UpdateTrip(int tripId, Trip trip)
        {
            var oldTrip = DataTrips.Trips.FirstOrDefault(c => c.Id == tripId);

            if(oldTrip != null)
            {
                oldTrip.Name = trip.Name;
                oldTrip.Description = trip.Description;
                oldTrip.DateStarted = trip.DateStarted;
                oldTrip.DateCompleted = trip.DateCompleted;
            }
        }
    }
}