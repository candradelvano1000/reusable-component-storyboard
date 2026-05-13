import type { Preview } from '@storybook/react-vite'
import 'intro.js/minified/introjs.min.css'
import introJs from 'intro.js'
import type { IntroJsParameters } from '../src/stories/shared/introJs'

let introTimer: ReturnType<typeof setTimeout> | undefined;

const g = globalThis as typeof globalThis & {
  process?: { env?: Record<string, string> };
};

if (!g.process) {
  g.process = { env: {} };
}

if (!g.process.env) {
  g.process.env = {};
}

Object.assign(g.process.env, {
  REACT_APP_API_BASE_URL: 'http://localhost:3004',
  REACT_APP_APIGW_BASE_URL: 'https://apigw.neuron.id',
  REACT_APP_USE_APIGW: 'false',
});

type MockFetchGlobal = typeof globalThis & {
  __sbOriginalFetch?: typeof fetch;
  __sbSalesMockInstalled?: boolean;
};

const SALES_LEAD_STATUSES = [
  { id: '1', name: 'New' },
  { id: '2', name: 'In Progress' },
  { id: '3', name: 'Pending' },
  { id: '4', name: 'Qualified' },
  { id: '5', name: 'Rejected' },
  { id: '6', name: 'Cancelled' },
  { id: '7', name: 'Converted' },
  { id: '8', name: 'Expired' },
];

const SALES_LEADS = [
  {
    id: 'lead-storybook-001',
    name: 'PT Nusantara Fiber Expansion',
    description: 'Enterprise connectivity expansion lead',
    status: 'In Progress',
    priority: 'high',
    rating: 4,
    statusChangeDate: '2026-05-12T10:00:00.000Z',
    statusChangeReason: 'Validated by account manager',
    creationDate: '2026-05-10T08:00:00.000Z',
    lastUpdate: '2026-05-13T02:00:00.000Z',
    estimatedRevenue: 250000000,
    estimatedRevenueUnit: 'IDR',
    type: 'Organization',
    code: 'LEAD-20260513-001',
    channel: { id: 'ch-1', name: 'Referral' },
    relatedParty: [
      { id: 'pty-1', href: '/party/pty-1', name: 'Rina Prasetyo', role: 'salesAgent', referredType: 'Individual' },
      { id: 'pty-2', href: '/party/pty-2', name: 'PT Nusantara Connect', role: 'prospect', referredType: 'Organization' },
    ],
    productOffering: { id: 'off-1', name: 'Business Fiber 1 Gbps' },
    productSpecification: { id: 'spec-1', name: 'Fiber Connectivity', version: '2.0' },
    category: { id: 'cat-1', name: 'Connectivity' },
    product: { id: 'prd-1', name: 'Enterprise Internet' },
    note: [
      { id: 'note-1', author: 'Rina', date: '2026-05-12 10:00:00', text: 'Need technical feasibility follow-up.' },
    ],
    prospectContact: [
      { id: 1, type: 'Technical', phoneNumber: '081234567890', email: 'cto@nusantara.co.id', city: 'Jakarta', preferred: true },
    ],
  },
  {
    id: 'lead-storybook-002',
    name: 'Retail Multi-Branch Upgrade',
    status: 'Qualified',
    priority: 'medium',
    rating: 3,
    creationDate: '2026-05-09T08:00:00.000Z',
    lastUpdate: '2026-05-13T01:30:00.000Z',
    estimatedRevenue: 120000000,
    estimatedRevenueUnit: 'IDR',
    type: 'Organization',
    code: 'LEAD-20260513-002',
    channel: { id: 'ch-2', name: 'Website' },
    relatedParty: [
      { id: 'pty-3', href: '/party/pty-3', name: 'Ayu Lestari', role: 'salesAgent', referredType: 'Individual' },
    ],
    creationDateTime: '2026-05-09T08:00:00.000Z',
  },
];

const OPPORTUNITIES = [
  {
    id: 'opp-storybook-001',
    name: 'Opportunity - Nusantara Fiber',
    description: 'Follow-up commercial proposal for enterprise branch network.',
    status: 'inProgress',
    priority: 'high',
    rating: '4',
    probability: 70,
    estimatedRevenueValue: 300000000,
    estimatedRevenueUnit: 'IDR',
    validFrom: '2026-05-01',
    validTo: '2026-06-30',
    leadId: 'lead-storybook-001',
    leadName: 'PT Nusantara Fiber Expansion',
    typeDiscriminator: 'B2B',
    statusChangeReason: 'Negotiation phase',
    creationDate: '2026-05-11T09:00:00.000Z',
    lastUpdate: '2026-05-13T02:30:00.000Z',
    relatedParty: [
      { id: 'pty-1', partyName: 'Rina Prasetyo', role: 'salesAgent', referredType: 'Individual' },
      { id: 'pty-2', partyName: 'PT Nusantara Connect', role: 'prospect', referredType: 'Organization' },
    ],
    note: [
      { id: 'opp-note-1', author: 'Rina', date: '2026-05-12 14:00:00', text: 'Customer asks for revised SLA options.' },
    ],
    salesOpportunityItem: [
      { id: 'item-1', action: 'add', rating: '4', priority: 'high', quantity: 1, productOfferingId: 'off-1', productOfferingName: 'Business Fiber 1 Gbps', unitPrice: 300000000 },
    ],
  },
];

const EVENT_HUB_ITEMS = [
  {
    id: 'evt-storybook-001',
    lead_id: 'lead-storybook-001',
    event_type: 'SalesLeadCreateEvent',
    event_payload: { id: 'lead-storybook-001', name: 'PT Nusantara Fiber Expansion', status: 'In Progress' },
    status: 'failed',
    created_at: '2026-05-13T01:00:00.000Z',
    processed_at: null,
    retry_count: 3,
    last_error: 'RabbitMQ timeout',
  },
  {
    id: 'evt-storybook-002',
    lead_id: 'lead-storybook-002',
    event_type: 'SalesLeadStateChangeEvent',
    event_payload: { id: 'lead-storybook-002', status: 'Qualified' },
    status: 'success',
    created_at: '2026-05-12T10:00:00.000Z',
    processed_at: '2026-05-12T10:00:02.000Z',
    retry_count: 0,
    last_error: null,
  },
];

function jsonResponse(data: unknown, status = 200, extraHeaders?: Record<string, string>): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...(extraHeaders ?? {}),
    },
  });
}

function emptyResponse(status = 204): Response {
  return new Response(null, { status });
}

function toPathAndMethod(input: RequestInfo | URL, init?: RequestInit): { path: string; method: string } {
  const requestUrl = typeof input === 'string'
    ? input
    : input instanceof URL
      ? input.toString()
      : input.url;
  const path = new URL(requestUrl, 'http://localhost').pathname;
  const method = String(init?.method ?? (typeof input !== 'string' && !(input instanceof URL) ? input.method : 'GET')).toUpperCase();
  return { path, method };
}

function withCountHeaders<T>(data: T[]): Response {
  return jsonResponse(data, 200, {
    'X-Total-Count': String(data.length),
    'X-Result-Count': String(data.length),
  });
}

function installSalesPagesMockFetch(): void {
  const gg = globalThis as MockFetchGlobal;
  if (gg.__sbSalesMockInstalled) return;
  if (!gg.__sbOriginalFetch && typeof gg.fetch === 'function') {
    gg.__sbOriginalFetch = gg.fetch.bind(globalThis);
  }

  gg.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const { path, method } = toPathAndMethod(input, init);

    if (path.endsWith('/tmf-api/sales/v4/salesLead/status') && method === 'GET') {
      return jsonResponse(SALES_LEAD_STATUSES);
    }

    if (path.endsWith('/tmf-api/sales/v4/salesLead') && method === 'GET') {
      return withCountHeaders(SALES_LEADS);
    }

    if (/\/tmf-api\/sales\/v4\/salesLead\/.+$/.test(path) && method === 'GET') {
      const id = path.split('/').pop() ?? '';
      const found = SALES_LEADS.find((item) => item.id === id) ?? SALES_LEADS[0];
      return jsonResponse(found);
    }

    if (path.endsWith('/tmf-api/sales/v4/salesLead') && method === 'POST') {
      return jsonResponse(SALES_LEADS[0], 201);
    }

    if (/\/tmf-api\/sales\/v4\/salesLead\/.+$/.test(path) && method === 'PATCH') {
      return jsonResponse(SALES_LEADS[0]);
    }

    if (/\/tmf-api\/sales\/v4\/salesLead\/.+$/.test(path) && method === 'DELETE') {
      return emptyResponse(204);
    }

    if (path.endsWith('/tmf-api/sales/v4/opportunity') && method === 'GET') {
      return withCountHeaders(OPPORTUNITIES);
    }

    if (/\/tmf-api\/sales\/v4\/opportunity\/.+$/.test(path) && method === 'GET') {
      const id = path.split('/').pop() ?? '';
      const found = OPPORTUNITIES.find((item) => item.id === id) ?? OPPORTUNITIES[0];
      return jsonResponse(found);
    }

    if (path.endsWith('/tmf-api/sales/v4/opportunity') && method === 'POST') {
      return jsonResponse(OPPORTUNITIES[0], 201);
    }

    if (/\/tmf-api\/sales\/v4\/opportunity\/.+$/.test(path) && method === 'PATCH') {
      return jsonResponse(OPPORTUNITIES[0]);
    }

    if (/\/tmf-api\/sales\/v4\/opportunity\/.+$/.test(path) && method === 'DELETE') {
      return emptyResponse(204);
    }

    if (path.endsWith('/tmf-api/sales/v4/list-event-hub-all') && method === 'GET') {
      return withCountHeaders(EVENT_HUB_ITEMS);
    }

    if (/\/tmf-api\/sales\/v4\/list-event-hub\/.+$/.test(path) && method === 'GET') {
      const id = path.split('/').pop() ?? '';
      const found = EVENT_HUB_ITEMS.find((item) => item.id === id) ?? EVENT_HUB_ITEMS[0];
      return jsonResponse(found);
    }

    if (/\/tmf-api\/sales\/v4\/retry-event-hub\/.+$/.test(path) && method === 'POST') {
      return jsonResponse({ ...EVENT_HUB_ITEMS[0], status: 'success', processed_at: '2026-05-13T03:15:20.000Z', retry_count: 4, last_error: null });
    }

    if (path.includes('/tmf-api/partyManagement/v5/individual') && method === 'GET') {
      return jsonResponse([
        { id: 'pty-1', href: '/party/pty-1', givenName: 'Rina', familyName: 'Prasetyo' },
        { id: 'pty-4', href: '/party/pty-4', givenName: 'Budi', familyName: 'Santoso' },
      ]);
    }

    if (path.includes('/tmf-api/partyManagement/v5/organization') && method === 'GET') {
      return jsonResponse([
        { id: 'pty-2', href: '/party/pty-2', name: 'PT Nusantara Connect' },
        { id: 'pty-5', href: '/party/pty-5', name: 'PT Sinar Digital' },
      ]);
    }

    if (path.includes('/tmf-api/productCatalogManagement/v5/productOffering') && method === 'GET') {
      return jsonResponse([
        {
          id: 'off-1',
          name: 'Business Fiber 1 Gbps',
          category: [{ id: 'cat-1', name: 'Connectivity' }],
          productSpecification: [{ id: 'spec-1', name: 'Fiber Connectivity', version: '2.0' }],
        },
        {
          id: 'off-2',
          name: 'Managed SD-WAN',
          category: [{ id: 'cat-2', name: 'Managed Service' }],
          productSpecification: [{ id: 'spec-2', name: 'SD-WAN', version: '1.3' }],
        },
      ]);
    }

    if (path.includes('/tmf-api/sales/v4/')) {
      return jsonResponse({});
    }

    if (gg.__sbOriginalFetch) {
      return gg.__sbOriginalFetch(input, init);
    }

    return jsonResponse({ message: 'No mock response configured.' }, 404);
  };

  gg.__sbSalesMockInstalled = true;
}

function uninstallSalesPagesMockFetch(): void {
  const gg = globalThis as MockFetchGlobal;
  if (!gg.__sbSalesMockInstalled) return;
  if (gg.__sbOriginalFetch) {
    gg.fetch = gg.__sbOriginalFetch;
  }
  gg.__sbSalesMockInstalled = false;
}

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const isSalesPagesStory = String(context.title ?? '').startsWith('MCS-SALES/Pages/');
      if (isSalesPagesStory) {
        installSalesPagesMockFetch();
      } else {
        uninstallSalesPagesMockFetch();
      }

      if (globalThis.window !== undefined) {
        const introParams = (context.parameters?.introJs ?? {}) as IntroJsParameters;

        if (introTimer) {
          clearTimeout(introTimer);
        }

        if (introParams.enabled) {
          introTimer = setTimeout(() => {
            const rootElement = document.querySelector('#storybook-root') as HTMLElement | null;
            const instance = rootElement ? introJs(rootElement) : introJs();

            const resolvedSteps = (introParams.steps ?? [])
              .map((step) => {
                const resolvedElement = step.element ?? (step.selector ? document.querySelector(step.selector) : undefined);
                return {
                  element: resolvedElement,
                  title: step.title,
                  intro: step.intro,
                  position: step.position,
                };
              })
              .filter((step) => step.intro && (!step.element || step.element instanceof Element));

            const options = {
              showProgress: true,
              showBullets: false,
              nextLabel: 'Next',
              prevLabel: 'Back',
              doneLabel: 'Done',
              ...(resolvedSteps.length ? { steps: resolvedSteps } : {}),
            };

            if (introParams.options) {
              Object.assign(options, introParams.options);
            }

            instance.setOptions(options).start();
          }, introParams.delayMs ?? 200);
        }
      }

      return Story();
    },
  ],
  parameters: {
    options: {
      storySort: (a, b) => {
        const titleA = String((a && (a.title || (a[1] && a[1].title))) || '');
        const titleB = String((b && (b.title || (b[1] && b[1].title))) || '');

        if (!titleA || !titleB) {
          return 0;
        }

        const isMcsSalesA = titleA.startsWith('MCS-SALES/');
        const isMcsSalesB = titleB.startsWith('MCS-SALES/');

        if (isMcsSalesA && isMcsSalesB) {
          const sectionA = titleA.split('/')[1] ?? '';
          const sectionB = titleB.split('/')[1] ?? '';

          if (sectionA === 'Pages' && sectionB !== 'Pages') return 1;
          if (sectionA !== 'Pages' && sectionB === 'Pages') return -1;

          if (sectionA !== sectionB) {
            return sectionA.localeCompare(sectionB);
          }
        }

        return titleA.localeCompare(titleB);
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    }
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for MCS components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'light' },
          { value: 'dark', icon: 'circle', title: 'dark' },
        ],
      },
    },
  },
};

export default preview;