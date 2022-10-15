import sanityClient from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'px1fa99s',
    dataset: 'production',
    apiVersion: '2022-10-09',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageURLBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}