
export const cateTypeDef = `
scalar ISODate
    type Category {
        main_category_id : String!
        main_category_name : String!
        main_category_image_url : String!
        is_active : Boolean
        updated_at : ISODate
    }
`