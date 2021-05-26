import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import 'jsdom-global/register';
//import toJson from "enzyme-to-json";

// IMPORT COMPONENTS
import CurrentList from "../components/CurrentList";
import Item from "../components/Item";

// Newer Enzyme versions require adapter
configure({ adapter: new Adapter() });

describe("React unit tests", () => {
  describe("CurrentList", () => {
    let wrapper;
    const mock1 = jest.fn();

    beforeAll(() => {
      wrapper = shallow(<CurrentList onClick={mock1}/>);
    });

    it("renders an h3 tag", () => {
      expect(wrapper.find("h3").text()).toMatch("To Buy List");
    });
  });

  describe("Item Component", () => {
    let wrapper;
    const mockFunc = jest.fn();
    const props = {
        itemName: 'apple', // <-- user input string
        key: 1,
        id: 2,
        deleteItem: () => {mockFunc()},
        updateItemStatus: () => {mockFunc()},
    };

    beforeAll(() => {
      wrapper = shallow(<Item {...props}/>);
    });

    it('function passed down should be invoked on click', () => {
        wrapper.find('button').forEach(node => node.simulate('click'))
        expect(mockFunc.mock.calls).toHaveLength(2);
    });

    it('should have 3 button elements', () => {
        expect(wrapper.find('button')).toHaveLength(3);
    });

    it('should have a span tag that contains the id and the item name as text', () => {
        expect(wrapper.find('.items').text()).toMatch('2. apple');
      });

  });
});
