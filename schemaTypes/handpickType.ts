import { defineField, defineType } from 'sanity'

export const handpickType = defineType({
  name: 'handpick',
  title: 'Handpicked Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'mlsId',
      title: 'MLS ID',
      type: 'string',
      validation: (rule) => rule.required().error('MLS ID is required'),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'beds',
      title: 'Number of Beds',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'baths',
      title: 'Number of Baths',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'squareFeet',
      title: 'Square Feet',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'acreage',
      title: 'Acreage',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Description of Home',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery of Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: { layout: 'grid' }, // Supports multiple images
    }),
    // defineField({
    //   name: 'latitude',
    //   title: 'Latitude',
    //   type: 'number',
    //   validation: (rule) =>
    //     rule.required().min(-90).max(90).error('Latitude must be between -90 and 90'),
    // }),
    // defineField({
    //   name: 'longitude',
    //   title: 'Longitude',
    //   type: 'number',
    //   validation: (rule) =>
    //     rule.required().min(-180).max(180).error('Longitude must be between -180 and 180'),
    // }),
    defineField({
      name: 'trailName',
      title: 'Trail Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'distanceToTrail',
      title: 'Distance to Trail',
      type: 'string',
      description: 'Example: "0.5 miles", "2-minute bike ride"',
    }),
    defineField({
      name: 'rideWithGPSID',
      title: 'Ride with GPS ID',
      type: 'number',
      description: 'create a route and capture the 8-digit number',
    }),
    defineField({
      name: 'listingAgent',
      title: 'Listing Agent Info',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'address' },
      validation: (rule) => rule.required().error('Slug is required for page generation'),
    }),
    defineField({
      name: 'date',
      title: 'Date Added',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
  ],

  // Define how the listing appears in Sanity Studio
  preview: {
    select: {
      title: 'address', // Uses Address as the title in the list view
      subtitle: 'mlsId', // Shows MLS ID as a subtitle
      media: 'gallery.0', // Uses the first image from the gallery as the thumbnail
    },
  },
})
