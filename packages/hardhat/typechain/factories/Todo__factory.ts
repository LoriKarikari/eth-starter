/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Todo, TodoInterface } from "../Todo";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "todoItemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "completed",
        type: "bool",
      },
    ],
    name: "TodoItemCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
    ],
    name: "createTodo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTodos",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "todoId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
        ],
        internalType: "struct Todo.TodoItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600081905550610aac806100286000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c33926cb1461003b578063e34f122114610059575b600080fd5b610043610075565b60405161005091906107f0565b60405180910390f35b610073600480360381019061006e91906105e4565b6101eb565b005b60606003805480602002602001604051908101604052809291908181526020016000905b828210156101e257838290600052602060002090600502016040518060a0016040529081600082015481526020016001820180546100d6906109a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610102906109a4565b801561014f5780601f106101245761010080835404028352916020019161014f565b820191906000526020600020905b81548152906001019060200180831161013257829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152505081526020019060010190610099565b50505050905090565b6101f56001610428565b6000610201600161043e565b905060036040518060a001604052808381526020018481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001428152602001600015158152506004600084815260200190815260200160002060008201518160000155602082015181600101908051906020019061027e92919061044c565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555090509080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015481600001556001820181600101908054610339906109a4565b6103449291906104d2565b506002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600382015481600301556004820160009054906101000a900460ff168160040160006101000a81548160ff0219169083151502179055505050807fdf914e4550c6b6580851ff8013c2161be22bb9b1d465946ae516dd0cc6bc3569833342600060405161041c9493929190610812565b60405180910390a25050565b6001816000016000828254019250508190555050565b600081600001549050919050565b828054610458906109a4565b90600052602060002090601f01602090048101928261047a57600085556104c1565b82601f1061049357805160ff19168380011785556104c1565b828001600101855582156104c1579182015b828111156104c05782518255916020019190600101906104a5565b5b5090506104ce919061055f565b5090565b8280546104de906109a4565b90600052602060002090601f016020900481019282610500576000855561054e565b82601f10610511578054855561054e565b8280016001018555821561054e57600052602060002091601f016020900482015b8281111561054d578254825591600101919060010190610532565b5b50905061055b919061055f565b5090565b5b80821115610578576000816000905550600101610560565b5090565b600061058f61058a84610883565b61085e565b9050828152602081018484840111156105a757600080fd5b6105b2848285610962565b509392505050565b600082601f8301126105cb57600080fd5b81356105db84826020860161057c565b91505092915050565b6000602082840312156105f657600080fd5b600082013567ffffffffffffffff81111561061057600080fd5b61061c848285016105ba565b91505092915050565b6000610631838361075c565b905092915050565b6106428161091a565b82525050565b6106518161091a565b82525050565b6000610662826108c4565b61066c81856108e7565b93508360208202850161067e856108b4565b8060005b858110156106ba578484038952815161069b8582610625565b94506106a6836108da565b925060208a01995050600181019050610682565b50829750879550505050505092915050565b6106d58161092c565b82525050565b6106e48161092c565b82525050565b60006106f5826108cf565b6106ff81856108f8565b935061070f818560208601610971565b61071881610a65565b840191505092915050565b600061072e826108cf565b6107388185610909565b9350610748818560208601610971565b61075181610a65565b840191505092915050565b600060a08301600083015161077460008601826107d2565b506020830151848203602086015261078c82826106ea565b91505060408301516107a16040860182610639565b5060608301516107b460608601826107d2565b5060808301516107c760808601826106cc565b508091505092915050565b6107db81610958565b82525050565b6107ea81610958565b82525050565b6000602082019050818103600083015261080a8184610657565b905092915050565b6000608082019050818103600083015261082c8187610723565b905061083b6020830186610648565b61084860408301856107e1565b61085560608301846106db565b95945050505050565b6000610868610879565b905061087482826109d6565b919050565b6000604051905090565b600067ffffffffffffffff82111561089e5761089d610a36565b5b6108a782610a65565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061092582610938565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561098f578082015181840152602081019050610974565b8381111561099e576000848401525b50505050565b600060028204905060018216806109bc57607f821691505b602082108114156109d0576109cf610a07565b5b50919050565b6109df82610a65565b810181811067ffffffffffffffff821117156109fe576109fd610a36565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f830116905091905056fea26469706673582212207e2546f97387fe01bc0c333ae37f0b3374336ed7c1934f3dab5300549797ecda64736f6c63430008040033";

export class Todo__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Todo> {
    return super.deploy(overrides || {}) as Promise<Todo>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Todo {
    return super.attach(address) as Todo;
  }
  connect(signer: Signer): Todo__factory {
    return super.connect(signer) as Todo__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TodoInterface {
    return new utils.Interface(_abi) as TodoInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Todo {
    return new Contract(address, _abi, signerOrProvider) as Todo;
  }
}
