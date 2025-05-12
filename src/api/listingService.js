import api from "./axios";

export const getAllListings = async () => {
  const response = await api.get("/api/listings");
  return response.data;
};

export const getListingById = async (listingId) => {
  const response = await api.get(`/api/listings/${listingId}`);

  return response.data;
};

export const getImagesByListingId = async (listingId) => {
  try {
    const response = await api.get(`api/images/all/${id}`);
    if (response.status === 404) {
      return [];
    }
    return response.data; 
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
