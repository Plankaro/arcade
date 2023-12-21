import React, { useState } from 'react';

interface SubItem {
  title: string;
  image: string;
}

interface Item {
  title: string;
  items: SubItem[];
}

interface DynamicMenuProps {
  items: Item[];
}

const DynamicMenu: React.FC<DynamicMenuProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<SubItem | null>(null);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setSelectedSubItem(null); // Reset the sub-item selection when a new main item is clicked
  };

  const handleSubItemClick = (subItem: SubItem) => {
    setSelectedSubItem(subItem);
  };

  return (
    <div className="dynamic-menu">
      <div className="menu">
        {items.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} onClick={() => handleItemClick(item)}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="sub-menu">
        {selectedItem && (
          <div>
            <h3>{selectedItem.title}</h3>
            <ul>
              {selectedItem.items.map((subItem, subIndex) => (
                <li key={subIndex} onClick={() => handleSubItemClick(subItem)}>
                  {subItem.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="image-viewer">
        {selectedSubItem && (
          <div>
            <h3>{selectedSubItem.title}</h3>
            <img src={selectedSubItem.image} alt={selectedSubItem.title} />
          </div>
        )}
      </div>
    </div>
  );
};

// Usage remains the same


export default DynamicMenu;

// Usage
const items = [
  {
    title: 'ground floor layout',
    items: [
      {
        title: 'Drop off zone 1',
        image: '1.jpg',
      },
      {
        title: 'Drop off zone 2',
        image: '2.jpg',
      },
      {
        title: 'Drop off zone 3',
        image: '3.jpg',
      },
    ],
  },
  {
    title: 'first floor layout',
    items: [
      {
        title: 'Drop off zone 4',
        image: '4.jpg',
      },
      {
        title: 'Drop off zone 5',
        image: '5.jpg',
      },
      {
        title: 'Drop off zone 6',
        image: '6.jpg',
      },
    ],
  },
];

// Use the DynamicMenu component
<DynamicMenu items={items} />;
