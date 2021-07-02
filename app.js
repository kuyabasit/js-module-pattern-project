// Storage Controller

// Item Controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    items: [
      { id: 0, name: "Steak Dinner", calories: 1200 },
      { id: 0, name: "Cookie", calories: 400 },
      { id: 0, name: "Eggs", calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };
  // Public Methods
  return {
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
  };
  // Public Methods
  return {
    populateItemsList: function (items) {
      let html = "";

      items.forEach(function (item) {
        html += `<li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil-alt"></i>
            </a>
        </li>`;
      });

      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
  };
})();
// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // Public methods
  return {
    init: function () {
      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemsList(items);
    },
  };
})(ItemCtrl, UICtrl);

App.init();
