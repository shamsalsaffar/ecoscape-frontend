import api from "./axios";

export const getAllListings = async () => {
  const response = await api.get("/api/listings");
  return response.data;
};

export const getListingById = async (id) => {
  const response = await api.get(`/api/listings/${id}`);

  return response.data;
};

export const getImagesByListingId = async (id) => {
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

export const searchAvailableListings = async ({
  checkInDate,
  checkOutDate,
  name,
  location,
  capacity,
  category
}) => {
  const params = new URLSearchParams();

  if (checkInDate) params.append('checkInDate', checkInDate);
  if (checkOutDate) params.append('checkOutDate', checkOutDate);
  if (name) params.append('name', name);
  if (location) params.append('location', location);
  if (capacity) params.append('capacity', capacity);
  if (category) params.append('category', category);

  const url = `/api/listings/search?${params.toString()}`;

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error;
  }
};

