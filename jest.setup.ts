import '@testing-library/jest-dom';

window.analytics = { ...window.analytics, page: jest.fn(), track: jest.fn() };
