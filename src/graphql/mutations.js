/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReagent = /* GraphQL */ `
  mutation CreateReagent(
    $input: CreateReagentInput!
    $condition: ModelReagentConditionInput
  ) {
    createReagent(input: $input, condition: $condition) {
      id
      name
      qualityControlInterval
      item {
        items {
          id
          reagentID
          expirationDate
          receivedDate
          quantity
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateReagent = /* GraphQL */ `
  mutation UpdateReagent(
    $input: UpdateReagentInput!
    $condition: ModelReagentConditionInput
  ) {
    updateReagent(input: $input, condition: $condition) {
      id
      name
      qualityControlInterval
      item {
        items {
          id
          reagentID
          expirationDate
          receivedDate
          quantity
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteReagent = /* GraphQL */ `
  mutation DeleteReagent(
    $input: DeleteReagentInput!
    $condition: ModelReagentConditionInput
  ) {
    deleteReagent(input: $input, condition: $condition) {
      id
      name
      qualityControlInterval
      item {
        items {
          id
          reagentID
          expirationDate
          receivedDate
          quantity
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      reagentID
      reagent {
        id
        name
        qualityControlInterval
        item {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      expirationDate
      receivedDate
      quantity
      updates {
        items {
          id
          itemID
          addedOrRemoved
          dateUpdated
          quantity
          comment
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      qualityControl {
        items {
          id
          itemID
          datePerformed
          performedBy
          comment
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      reagentID
      reagent {
        id
        name
        qualityControlInterval
        item {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      expirationDate
      receivedDate
      quantity
      updates {
        items {
          id
          itemID
          addedOrRemoved
          dateUpdated
          quantity
          comment
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      qualityControl {
        items {
          id
          itemID
          datePerformed
          performedBy
          comment
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      reagentID
      reagent {
        id
        name
        qualityControlInterval
        item {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      expirationDate
      receivedDate
      quantity
      updates {
        items {
          id
          itemID
          addedOrRemoved
          dateUpdated
          quantity
          comment
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      qualityControl {
        items {
          id
          itemID
          datePerformed
          performedBy
          comment
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUpdatedItem = /* GraphQL */ `
  mutation CreateUpdatedItem(
    $input: CreateUpdatedItemInput!
    $condition: ModelUpdatedItemConditionInput
  ) {
    createUpdatedItem(input: $input, condition: $condition) {
      id
      itemID
      addedOrRemoved
      dateUpdated
      quantity
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUpdatedItem = /* GraphQL */ `
  mutation UpdateUpdatedItem(
    $input: UpdateUpdatedItemInput!
    $condition: ModelUpdatedItemConditionInput
  ) {
    updateUpdatedItem(input: $input, condition: $condition) {
      id
      itemID
      addedOrRemoved
      dateUpdated
      quantity
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUpdatedItem = /* GraphQL */ `
  mutation DeleteUpdatedItem(
    $input: DeleteUpdatedItemInput!
    $condition: ModelUpdatedItemConditionInput
  ) {
    deleteUpdatedItem(input: $input, condition: $condition) {
      id
      itemID
      addedOrRemoved
      dateUpdated
      quantity
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createQualityControl = /* GraphQL */ `
  mutation CreateQualityControl(
    $input: CreateQualityControlInput!
    $condition: ModelQualityControlConditionInput
  ) {
    createQualityControl(input: $input, condition: $condition) {
      id
      itemID
      datePerformed
      performedBy
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateQualityControl = /* GraphQL */ `
  mutation UpdateQualityControl(
    $input: UpdateQualityControlInput!
    $condition: ModelQualityControlConditionInput
  ) {
    updateQualityControl(input: $input, condition: $condition) {
      id
      itemID
      datePerformed
      performedBy
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteQualityControl = /* GraphQL */ `
  mutation DeleteQualityControl(
    $input: DeleteQualityControlInput!
    $condition: ModelQualityControlConditionInput
  ) {
    deleteQualityControl(input: $input, condition: $condition) {
      id
      itemID
      datePerformed
      performedBy
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
