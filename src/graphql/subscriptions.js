/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReagent = /* GraphQL */ `
  subscription OnCreateReagent($owner: String) {
    onCreateReagent(owner: $owner) {
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
export const onUpdateReagent = /* GraphQL */ `
  subscription OnUpdateReagent($owner: String) {
    onUpdateReagent(owner: $owner) {
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
export const onDeleteReagent = /* GraphQL */ `
  subscription OnDeleteReagent($owner: String) {
    onDeleteReagent(owner: $owner) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($owner: String) {
    onCreateItem(owner: $owner) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($owner: String) {
    onUpdateItem(owner: $owner) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($owner: String) {
    onDeleteItem(owner: $owner) {
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
export const onCreateUpdatedItem = /* GraphQL */ `
  subscription OnCreateUpdatedItem($owner: String) {
    onCreateUpdatedItem(owner: $owner) {
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
export const onUpdateUpdatedItem = /* GraphQL */ `
  subscription OnUpdateUpdatedItem($owner: String) {
    onUpdateUpdatedItem(owner: $owner) {
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
export const onDeleteUpdatedItem = /* GraphQL */ `
  subscription OnDeleteUpdatedItem($owner: String) {
    onDeleteUpdatedItem(owner: $owner) {
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
export const onCreateQualityControl = /* GraphQL */ `
  subscription OnCreateQualityControl($owner: String) {
    onCreateQualityControl(owner: $owner) {
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
export const onUpdateQualityControl = /* GraphQL */ `
  subscription OnUpdateQualityControl($owner: String) {
    onUpdateQualityControl(owner: $owner) {
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
export const onDeleteQualityControl = /* GraphQL */ `
  subscription OnDeleteQualityControl($owner: String) {
    onDeleteQualityControl(owner: $owner) {
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
