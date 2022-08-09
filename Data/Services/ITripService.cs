using System.Collections.Generic;
using ReactTrips1.Data;

namespace ReactTrips1.Services
{
    public interface ITripService
    {
        List<Trip> GetAllTrips();
        Trip GetTripById(int tripId);

        void UpdateTrip(int tripId, Trip trip);

        void DeleteTrip(int tripId);

        void AddTrip(Trip trip);

        
    }
}