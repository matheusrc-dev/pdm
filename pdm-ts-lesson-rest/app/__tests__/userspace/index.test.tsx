import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { Alert } from 'react-native';
import Home from '../../userspace/index';
import { useTokenContext } from '../../../src/contexts/userContext';
import api from '../../../src/services/api';

jest.mock('expo-router', () => ({
  useRouter: () => ({
    replace: jest.fn(),
    push: jest.fn(),
  }),
}));


jest.mock('../../../src/contexts/userContext', () => ({
  useTokenContext: jest.fn(),
}));

jest.mock('../../../src/services/api', () => ({
  get: jest.fn(),
  post: jest.fn(),
  delete: jest.fn(),
}));

jest.mock('@expo/vector-icons', () => ({
  FontAwesome: 'FontAwesome',
}));

jest.spyOn(Alert, 'alert');

describe('Home Component', () => {
  const mockToken = 'test-token';
  const mockUserId = 'test-user-id';
  const mockClearAuth = jest.fn();
  
  const mockCars = [
    { id: '1', brand: 'Toyota', model: 'Corolla', hp: 170 },
    { id: '2', brand: 'Honda', model: 'Civic', hp: 150 },
  ];

  const mockFavorites = [
    { id: 'fav1', car_id: '1', user_id: mockUserId },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (useTokenContext as jest.Mock).mockReturnValue({
      token: mockToken,
      userId: mockUserId,
      clearAuth: mockClearAuth,
    });
    (api.get as jest.Mock).mockImplementation((url) => {
      if (url.includes('cars')) {
        return Promise.resolve({ data: { items: mockCars } });
      }
      if (url.includes('favorites')) {
        return Promise.resolve({ data: { items: mockFavorites } });
      }
    });
  });

  it('should filter cars by search term', async () => {
    const { getByPlaceholderText, queryByText } = render(<Home />);
    
    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith(
        '/api/collections/cars/records',
        expect.any(Object)
      );
    });

    await waitFor(() => {
      expect(queryByText('Toyota')).toBeTruthy();
      expect(queryByText('Honda')).toBeTruthy();
    });

    const searchInput = getByPlaceholderText('Buscar por marca...');
    await act(async () => {
      fireEvent.changeText(searchInput, 'toyota');
    });

    await waitFor(() => {
      expect(queryByText('Toyota')).toBeTruthy();
      expect(queryByText('Honda')).toBeFalsy();
    });
  });

  it('should toggle car favorite status', async () => {
    const { getAllByTestId } = render(<Home />);
    
    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith(
        '/api/collections/cars/records',
        expect.any(Object)
      );
    });

    const favoriteButtons = await waitFor(() => getAllByTestId('favorite-button'));
    expect(favoriteButtons).toHaveLength(2);

    await act(async () => {
      fireEvent.press(favoriteButtons[0]);
    });

    expect(api.delete).toHaveBeenCalledWith(
      expect.stringContaining('car_favorites/records/fav1'),
      expect.any(Object)
    );

    await act(async () => {
      fireEvent.press(favoriteButtons[1]);
    });

    expect(api.post).toHaveBeenCalledWith(
      expect.stringContaining('car_favorites/records'),
      { user_id: mockUserId, car_id: '2' },
      expect.any(Object)
    );
  });

  it('should handle car deletion', async () => {
    const { getAllByText } = render(<Home />);
    
    await waitFor(() => {
      const deleteButtons = getAllByText('Excluir');
      fireEvent.press(deleteButtons[0]);
      
      expect(Alert.alert).toHaveBeenCalledWith(
        'Confirmar',
        'Tem certeza que deseja excluir este carro?',
        expect.any(Array)
      );

      const confirmDeleteCallback = (Alert.alert as jest.Mock).mock.calls[0][2][1].onPress;
      confirmDeleteCallback();

      expect(api.delete).toHaveBeenCalledWith(
        expect.stringContaining('cars/records/1'),
        expect.any(Object)
      );
    });
  });

  it('should filter to show only favorites', async () => {
    const { getByTestId, queryByText } = render(<Home />);
    
    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith(
        '/api/collections/cars/records',
        expect.any(Object)
      );
    });

    await waitFor(() => {
      expect(queryByText('Toyota')).toBeTruthy();
      expect(queryByText('Honda')).toBeTruthy();
    });

    const filterButton = getByTestId('filter-button');
    await act(async () => {
      fireEvent.press(filterButton);
    });

    await waitFor(() => {
      expect(queryByText('Toyota')).toBeTruthy(); // Toyota is in favorites
      expect(queryByText('Honda')).toBeFalsy(); // Honda is not in favorites
    });
  });
});
