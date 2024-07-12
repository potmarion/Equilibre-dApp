export const veTokenABI = [
  {
    type: 'constructor',
    stateMutability: 'nonpayable',
    inputs: [
      { type: 'address', name: 'token_addr', internalType: 'address' },
      { type: 'address', name: 'art_proxy', internalType: 'address' },
    ],
  },
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'approved',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ApprovalForAll',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'operator',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'bool',
        name: 'approved',
        internalType: 'bool',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'DelegateChanged',
    inputs: [
      {
        type: 'address',
        name: 'delegator',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'fromDelegate',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'toDelegate',
        internalType: 'address',
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'DelegateVotesChanged',
    inputs: [
      {
        type: 'address',
        name: 'delegate',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'previousBalance',
        internalType: 'uint256',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'newBalance',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Deposit',
    inputs: [
      {
        type: 'address',
        name: 'provider',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'value',
        internalType: 'uint256',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'locktime',
        internalType: 'uint256',
        indexed: true,
      },
      {
        type: 'uint8',
        name: 'deposit_type',
        internalType: 'enum VotingEscrow.DepositType',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'ts',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Supply',
    inputs: [
      {
        type: 'uint256',
        name: 'prevSupply',
        internalType: 'uint256',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'supply',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      {
        type: 'address',
        name: 'from',
        internalType: 'address',
        indexed: true,
      },
      { type: 'address', name: 'to', internalType: 'address', indexed: true },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Withdraw',
    inputs: [
      {
        type: 'address',
        name: 'provider',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'value',
        internalType: 'uint256',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'ts',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'bytes32', name: '', internalType: 'bytes32' }],
    name: 'DELEGATION_TYPEHASH',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'bytes32', name: '', internalType: 'bytes32' }],
    name: 'DOMAIN_TYPEHASH',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'MAX_DELEGATES',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'abstain',
    inputs: [{ type: 'uint256', name: '_tokenId', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'approve',
    inputs: [
      { type: 'address', name: '_approved', internalType: 'address' },
      { type: 'uint256', name: '_tokenId', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'artProxy',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'attach',
    inputs: [{ type: 'uint256', name: '_tokenId', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'attachments',
    inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'balanceOf',
    inputs: [{ type: 'address', name: '_owner', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'balanceOfAtNFT',
    inputs: [
      { type: 'uint256', name: '_tokenId', internalType: 'uint256' },
      { type: 'uint256', name: '_block', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'balanceOfNFT',
    inputs: [{ type: 'uint256', name: '_tokenId', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'balanceOfNFTAt',
    inputs: [
      { type: 'uint256', name: '_tokenId', internalType: 'uint256' },
      { type: 'uint256', name: '_t', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'block_number',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'checkpoint',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: 'timestamp', internalType: 'uint256' }],
    name: 'checkpoints',
    inputs: [
      { type: 'address', name: '', internalType: 'address' },
      { type: 'uint32', name: '', internalType: 'uint32' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'create_lock',
    inputs: [
      { type: 'uint256', name: '_value', internalType: 'uint256' },
      { type: 'uint256', name: '_lock_duration', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'create_lock_for',
    inputs: [
      { type: 'uint256', name: '_value', internalType: 'uint256' },
      { type: 'uint256', name: '_lock_duration', internalType: 'uint256' },
      { type: 'address', name: '_to', internalType: 'address' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint8', name: '', internalType: 'uint8' }],
    name: 'decimals',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'delegate',
    inputs: [{ type: 'address', name: 'delegatee', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'delegateBySig',
    inputs: [
      { type: 'address', name: 'delegatee', internalType: 'address' },
      { type: 'uint256', name: 'nonce', internalType: 'uint256' },
      { type: 'uint256', name: 'expiry', internalType: 'uint256' },
      { type: 'uint8', name: 'v', internalType: 'uint8' },
      { type: 'bytes32', name: 'r', internalType: 'bytes32' },
      { type: 'bytes32', name: 's', internalType: 'bytes32' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'delegates',
    inputs: [{ type: 'address', name: 'delegator', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'deposit_for',
    inputs: [
      { type: 'uint256', name: '_tokenId', internalType: 'uint256' },
      { type: 'uint256', name: '_value', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'detach',
    inputs: [{ type: 'uint256', name: '_tokenId', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'epoch',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'getApproved',
    inputs: [{ type: 'uint256', name: '_tokenId', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'getPastTotalSupply',
    inputs: [{ type: 'uint256', name: 'timestamp', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'getPastVotes',
    inputs: [
      { type: 'address', name: 'account', internalType: 'address' },
      { type: 'uint256', name: 'timestamp', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint32', name: '', internalType: 'uint32' }],
    name: 'getPastVotesIndex',
    inputs: [
      { type: 'address', name: 'account', internalType: 'address' },
      { type: 'uint256', name: 'timestamp', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'getVotes',
    inputs: [{ type: 'address', name: 'account', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'int128', name: '', internalType: 'int128' }],
    name: 'get_last_user_slope',
    inputs: [{ type: 'uint256', name: '_tokenId', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'increase_amount',
    inputs: [
      { type: 'uint256', name: '_tokenId', internalType: 'uint256' },
      { type: 'uint256', name: '_value', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'increase_unlock_time',
    inputs: [
      { type: 'uint256', name: '_tokenId', internalType: 'uint256' },
      { type: 'uint256', name: '_lock_duration', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'isApprovedForAll',
    inputs: [
      { type: 'address', name: '_owner', internalType: 'address' },
      { type: 'address', name: '_operator', internalType: 'address' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'isApprovedOrOwner',
    inputs: [
      { type: 'address', name: '_spender', internalType: 'address' },
      { type: 'uint256', name: '_tokenId', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      { type: 'int128', name: 'amount', internalType: 'int128' },
      { type: 'uint256', name: 'end', internalType: 'uint256' },
    ],
    name: 'locked',
    inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'locked__end',
    inputs: [{ type: 'uint256', name: '_tokenId', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'merge',
    inputs: [
      { type: 'uint256', name: '_from', internalType: 'uint256' },
      { type: 'uint256', name: '_to', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'string', name: '', internalType: 'string' }],
    name: 'name',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'nonces',
    inputs: [{ type: 'address', name: '', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint32', name: '', internalType: 'uint32' }],
    name: 'numCheckpoints',
    inputs: [{ type: 'address', name: '', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'ownerOf',
    inputs: [{ type: 'uint256', name: '_tokenId', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'ownership_change',
    inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      { type: 'int128', name: 'bias', internalType: 'int128' },
      { type: 'int128', name: 'slope', internalType: 'int128' },
      { type: 'uint256', name: 'ts', internalType: 'uint256' },
      { type: 'uint256', name: 'blk', internalType: 'uint256' },
    ],
    name: 'point_history',
    inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'safeTransferFrom',
    inputs: [
      { type: 'address', name: '_from', internalType: 'address' },
      { type: 'address', name: '_to', internalType: 'address' },
      { type: 'uint256', name: '_tokenId', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'safeTransferFrom',
    inputs: [
      { type: 'address', name: '_from', internalType: 'address' },
      { type: 'address', name: '_to', internalType: 'address' },
      { type: 'uint256', name: '_tokenId', internalType: 'uint256' },
      { type: 'bytes', name: '_data', internalType: 'bytes' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'setApprovalForAll',
    inputs: [
      { type: 'address', name: '_operator', internalType: 'address' },
      { type: 'bool', name: '_approved', internalType: 'bool' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'setArtProxy',
    inputs: [{ type: 'address', name: '_proxy', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'setTeam',
    inputs: [{ type: 'address', name: '_team', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'setVoter',
    inputs: [{ type: 'address', name: '_voter', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'int128', name: '', internalType: 'int128' }],
    name: 'slope_changes',
    inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'supply',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'supportsInterface',
    inputs: [{ type: 'bytes4', name: '_interfaceID', internalType: 'bytes4' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'string', name: '', internalType: 'string' }],
    name: 'symbol',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'team',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'token',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'tokenOfOwnerByIndex',
    inputs: [
      { type: 'address', name: '_owner', internalType: 'address' },
      { type: 'uint256', name: '_tokenIndex', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'string', name: '', internalType: 'string' }],
    name: 'tokenURI',
    inputs: [{ type: 'uint256', name: '_tokenId', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'totalSupply',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'totalSupplyAt',
    inputs: [{ type: 'uint256', name: '_block', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'totalSupplyAtT',
    inputs: [{ type: 'uint256', name: 't', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'transferFrom',
    inputs: [
      { type: 'address', name: '_from', internalType: 'address' },
      { type: 'address', name: '_to', internalType: 'address' },
      { type: 'uint256', name: '_tokenId', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'user_point_epoch',
    inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      { type: 'int128', name: 'bias', internalType: 'int128' },
      { type: 'int128', name: 'slope', internalType: 'int128' },
      { type: 'uint256', name: 'ts', internalType: 'uint256' },
      { type: 'uint256', name: 'blk', internalType: 'uint256' },
    ],
    name: 'user_point_history',
    inputs: [
      { type: 'uint256', name: '', internalType: 'uint256' },
      { type: 'uint256', name: '', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'user_point_history__ts',
    inputs: [
      { type: 'uint256', name: '_tokenId', internalType: 'uint256' },
      { type: 'uint256', name: '_idx', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'string', name: '', internalType: 'string' }],
    name: 'version',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'voted',
    inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'voter',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'voting',
    inputs: [{ type: 'uint256', name: '_tokenId', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'withdraw',
    inputs: [{ type: 'uint256', name: '_tokenId', internalType: 'uint256' }],
  },
] as const;
