import { render, screen } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import {Link } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16'
import Inicio from '../src/components/inicio/Inicio'


configure({ adapter: new Adapter() });

describe('inicio', () => {
  let wrapper
  beforeEach(() => {
      wrapper = shallow(<Inicio />)
  })

  it('Deberia renderizar un boton', () => {
      expect(wrapper.find('button')).toHaveLength(1);
  });
  it('Deberia renderizar un <Link>', () => {
      expect(wrapper.find(Link)).toHaveLength(1);

  });
  it('El Link debe cambiar la ruta hacia "/videogames"', () => {
      expect(wrapper.find(Link).prop('to')).toEqual('/videogames');
  });
})
