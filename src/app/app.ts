import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Button } from '@openng/optimus-ui/button';

@Component({
  imports: [RouterOutlet, FormsModule, Button],
  selector: 'app-root',
  // styleUrl: './app.css',
  // templateUrl: './app.html',
  template: `
    <h1>{{ title2 }}</h1>
    <p>Contador: {{ contador() }}</p>

    <button
      class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow"
      type="button"
      (click)="incrementar()"
    >
      Somar 1
    </button>
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      type="button"
      [disabled]="ehContadorIgualZero()"
      (click)="decrementar()"
    >
      Subtrair 1
    </button>

    <hr />

    <p-button label="Botão optimus" />

    <p>Hello, {{ nomeUsuario() }}!</p>
    <div class="w-full max-w-sm min-w-50">
      <input
        class="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        type="text"
        [(ngModel)]="nomeUsuario"
        placeholder="Digite seu nome..."
      />
    </div>

    <router-outlet />
  `,
})
export class App {
  protected readonly title = signal<string>('World');
  protected readonly title2 = 'Hello, projeto-angular';
  protected readonly contador = signal<number>(0);
  protected readonly nomeUsuario = signal<string>('');

  // Propriedade derivada automaticamente baseada no valor do signal 'contador'
  protected readonly ehContadorIgualZero = computed(() => this.contador() <= 0);

  protected incrementar(): void {
    this.contador.update((valor) => valor + 1);
  }

  protected decrementar(): void {
    if (this.contador() > 0) {
      this.contador.update((valor) => valor - 1);
    }
  }
}
