const review = [
    {
        id: 0,
        clientName: 'dconsulted',
        clientLocation: 'Canada',
        clientSource: 'Fiverr',
        clientReview: 'Great communication and search done in time!'
    },
    {
        id: 2,
        clientName: 'gngreatstart',
        clientLocation: 'India',
        clientSource: 'Fiverr',
        clientReview: 'Excellent freelancer. Honest and skilled :) Highly recommended for Python related projects.'
    },
    {
        id: 3,
        clientName: 'David Wilkes',
        clientLocation: 'Germany',
        clientSource: 'Upwork',
        clientReview: "Good small job, done in time. Good communications."
    },
    {
        id: 4,
        clientName: 'mrallusive',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'He did an amazing job!'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
