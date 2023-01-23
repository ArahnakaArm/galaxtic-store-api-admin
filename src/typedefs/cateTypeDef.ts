
export const cateTypeDef = `
scalar ISODate
    type CategoryResponse {
        data : [Category!]
        rowCount : Int,
        maxPage : Int
    }
    type Category {
        main_category_id : String!
        main_category_name : String!
        main_category_image_url : String!
        is_active : Boolean,
        order : Int,
        updated_at : ISODate
    }
    type Mutation {
        putCategory(main_category_id: String ,main_category_name: String ,is_active: Boolean): Category
    }
`