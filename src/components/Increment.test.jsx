import { render, screen, logRoles } from '@testing-library/react';
import Increment from './Increment';

describe('something truthy and falsy', () =>
{
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe.only('<Increment />', () =>
{
    it('renders the component correctly', async () => {
    //    const {container} = render(<Increment />)
    //    logRoles(container)
        render(<Increment />)
        const h3 = await screen.findByRole('heading', { level: 3 })
        expect(h3).toBeInTheDocument()
    });
 })