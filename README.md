# Moneyhub Tech Test - Property Details

A Valuation changes section has been added to the Property Details app as per the instructions. I have created an AccountContainer component to decrease repetition in the modules/property-details container, another called ValuationResults to house the valuation change values and present them as per the designs. The colours for this component were added to the theme as a secondary colour. 

Making the design responsive the ValuationResults change their width to be uniform on mobile as well as the font-size to be small instead of medium. 

The RowContainer component was not used in the end because the display:flex; property was interfering with the Valuation changes layout. I had originally deleted some of the CSS properties but I was not sure if that was what the task required so I just used the AccountList component instead. I had originally changed the css properties of the RowContainer but saw the comment at the top saying this component shouldn’t be altered.

If I had more time I would have fixed the sidebar as when it is in laptop view it doesn’t extend all the way to the bottom of the screen. Also I would have liked to add some unit tests for the components as I have only unit tested the util functions in modules/property-details/utils. 

The styled-components library was nice to use. I had not had any experience with it before and found it quite a simple and instinctive way to create little components.

It was an enjoyable coding challenge as it felt more like a normal Frontend ticket than the usual creating an app from scratch and fetching some data to present. Thanks for going to the effort to create a more unique experience. 


## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

You can start by looking at `modules/property-details/index`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
