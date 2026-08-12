export interface JobListing {
  id: string;
  title: string;
  type: string;
  location: string;
  status: 'Open' | 'Pending' | 'In Progress';
}

export interface StateData {
  name: string;
  fips: string;
  jobs: JobListing[];
}

export const STATE_JOBS_DATA: Record<string, StateData> = {
  "06": {
    name: "California",
    fips: "06",
    jobs: [
      { id: "job-101", title: "Luxury Estate Exterior Restoration", type: "Commercial/Residential", location: "Beverly Hills, CA", status: "Open" },
      { id: "job-102", title: "Historic Masonry & Trim Painting", type: "Preservation", location: "San Francisco, CA", status: "In Progress" }
    ]
  },
  "41": {
    name: "Oregon",
    fips: "41",
    jobs: [
      { id: "job-201", title: "Coastal Exterior Weatherproofing", type: "Residential", location: "Cannon Beach, OR", status: "Open" }
    ]
  },
  "53": {
    name: "Washington",
    fips: "53",
    jobs: [
      { id: "job-301", title: "Commercial Warehouse Interior Coating", type: "Commercial", location: "Seattle, WA", status: "Open" }
    ]
  },
  "36": {
    name: "New York",
    fips: "36",
    jobs: [
      { id: "job-401", title: "Brownstone Facade Restoration", type: "Historical Preservation", location: "Brooklyn, NY", status: "Open" }
    ]
  }
};
