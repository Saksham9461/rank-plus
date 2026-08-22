import { ThemeProvider } from '@/components/theme-provider';
import { ModalProvider } from '@/components/dashboard/modals/modal-provider';
import { Dashboard } from '@/components/dashboard/dashboard';

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <Dashboard />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
