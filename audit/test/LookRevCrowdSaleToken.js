var tokenOutput={"contracts":{"LookRevCrowdSaleToken.sol:ERC20":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":""},"LookRevCrowdSaleToken.sol:LookRevToken":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TOKENS_TOTAL\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tokensPerKEther\",\"type\":\"uint256\"}],\"name\":\"setTokensPerKEther\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"participant\",\"type\":\"address\"},{\"name\":\"_required\",\"type\":\"bool\"}],\"name\":\"kycVerify\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"finalised\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"KYC_THRESHOLD\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"CONTRIBUTIONS_MIN\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"START_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"participant\",\"type\":\"address\"},{\"name\":\"balance\",\"type\":\"uint256\"}],\"name\":\"addPrecommitment\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TOKENS_SOFT_CAP\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"wallet\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"END_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"burnFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TOKENS_HARD_CAP\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"DECIMALSFACTOR\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"CONTRIBUTIONS_MAX\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finalise\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"tokensPerKEther\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"kycRequired\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenAddress\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferAnyERC20Token\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_wallet\",\"type\":\"address\"}],\"name\":\"setWallet\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"participant\",\"type\":\"address\"}],\"name\":\"proxyPayment\",\"outputs\":[],\"payable\":true,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"VERSION\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"inputs\":[{\"name\":\"_wallet\",\"type\":\"address\"},{\"name\":\"_initialSupply\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"constructor\"},{\"payable\":true,\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"newWallet\",\"type\":\"address\"}],\"name\":\"WalletUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"tokensPerKEther\",\"type\":\"uint256\"}],\"name\":\"TokensPerKEtherUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"ethers\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"participantTokenBalance\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"newTotalSupply\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"tokensPerKEther\",\"type\":\"uint256\"}],\"name\":\"TokensBought\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"participant\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"balance\",\"type\":\"uint256\"}],\"name\":\"PrecommitmentAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"participant\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"required\",\"type\":\"bool\"}],\"name\":\"KycVerified\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":"60a0604052600660608190527f4c4f4b312e3000000000000000000000000000000000000000000000000000006080908152620000409160049190620000f8565b506005805460ff19169055622dc6c06007556000600881905560095534156200006557fe5b604051604080620017db8339810160405280516020909101515b5b60018054600160a060020a03191633600160a060020a03161790555b6005805461010060a860020a031916610100600160a060020a03858116919091029190911790915560018054600160a060020a03191633831617908190556000838155911681526002602052604090208190555b5050620001a2565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200013b57805160ff19168380011785556200016b565b828001600101855582156200016b579182015b828111156200016b5782518255916020019190600101906200014e565b5b506200017a9291506200017e565b5090565b6200019f91905b808211156200017a576000815560010162000185565b5090565b90565b61162980620001b26000396000f3006060604052361561019e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146101b0578063095ea7b3146102405780630b743021146102735780630e9d02cc1461029557806318160ddd146102aa5780631e9dd927146102cc578063214bb60f146102ef57806323b872dd146103135780632d133eee1461034c5780632da13d5e1461036e578063313ce56714610390578063372c6533146103b65780633818d907146103d85780633a9f967e1461034c578063521eb2731461041b578063545599ff1461044757806370a082311461046957806379cc679014610497578063831a1754146104ca5780638bc04eb7146104ec5780638da5cb5b1461050e57806393fea1841461053a57806395d89b411461055c578063a4399263146105ec578063a5bc770c146105fe578063a9059cbb14610620578063b7121da414610653578063dc39d06d14610683578063dd62ed3e146106b6578063deaa59df146106ea578063f2fde38b14610708578063f48c305414610726578063ffa1ad741461073c575b6101ae5b6101ab336107cc565b5b565b005b34156101b857fe5b6101c06109a8565b604080516020808252835181830152835191928392908301918501908083838215610206575b80518252602083111561020657601f1990920191602091820191016101e6565b505050905090810190601f1680156102325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561024857fe5b61025f600160a060020a03600435166024356109df565b604080519115158252519081900360200190f35b341561027b57fe5b610283610ab1565b60408051918252519081900360200190f35b341561029d57fe5b6101ae600435610ac0565b005b34156102b257fe5b610283610b38565b60408051918252519081900360200190f35b34156102d457fe5b6101ae600160a060020a03600435166024351515610b3e565b005b34156102f757fe5b61025f610bc1565b604080519115158252519081900360200190f35b341561031b57fe5b61025f600160a060020a0360043581169060243516604435610bca565b604080519115158252519081900360200190f35b341561035457fe5b610283610c1b565b60408051918252519081900360200190f35b341561037657fe5b610283610c29565b60408051918252519081900360200190f35b341561039857fe5b6103a0610c2f565b6040805160ff9092168252519081900360200190f35b34156103be57fe5b610283610c34565b60408051918252519081900360200190f35b34156103e057fe5b6101ae600160a060020a0360043516602435610c3c565b005b341561035457fe5b610283610c1b565b60408051918252519081900360200190f35b341561042357fe5b61042b610d47565b60408051600160a060020a039092168252519081900360200190f35b341561044f57fe5b610283610d5b565b60408051918252519081900360200190f35b341561047157fe5b610283600160a060020a0360043516610d63565b60408051918252519081900360200190f35b341561049f57fe5b61025f600160a060020a0360043516602435610d82565b604080519115158252519081900360200190f35b34156104d257fe5b610283610f43565b60408051918252519081900360200190f35b34156104f457fe5b610283610f51565b60408051918252519081900360200190f35b341561051657fe5b61042b610f5d565b60408051600160a060020a039092168252519081900360200190f35b341561054257fe5b610283610f6c565b60408051918252519081900360200190f35b341561056457fe5b6101c0610f72565b604080516020808252835181830152835191928392908301918501908083838215610206575b80518252602083111561020657601f1990920191602091820191016101e6565b505050905090810190601f1680156102325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156105f457fe5b6101ae610fa9565b005b341561060657fe5b610283611012565b60408051918252519081900360200190f35b341561062857fe5b61025f600160a060020a0360043516602435611018565b604080519115158252519081900360200190f35b341561065b57fe5b61025f600160a060020a0360043516611067565b604080519115158252519081900360200190f35b341561068b57fe5b61025f600160a060020a036004351660243561107c565b604080519115158252519081900360200190f35b34156106be57fe5b610283600160a060020a036004358116906024351661112d565b60408051918252519081900360200190f35b34156106f257fe5b6101ae600160a060020a036004351661115a565b005b341561071057fe5b6101ae600160a060020a03600435166111e9565b005b6101ae600160a060020a03600435166107cc565b005b341561074457fe5b6101c061127c565b604080516020808252835181830152835191928392908301918501908083838215610206575b80518252602083111561020657601f1990920191602091820191016101e6565b505050905090810190601f1680156102325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60055460009060ff16156107e05760006000fd5b635975e0b14211156107f25760006000fd5b60085434116108015760006000fd5b6009541580610811575060095434105b151561081d5760006000fd5b6007546103e89034025b600054919004915069d3c21bcecceda100000090820111156108495760006000fd5b600160a060020a03821660009081526002602052604090205461086c908261130a565b600160a060020a03831660009081526002602052604081209190915554610893908261130a565b6000908155604080518381529051600160a060020a03851692916000805160206115de833981519152919081900360200190a3600160a060020a03821660008181526002602090815260408083205492546007548251348152938401949094528282018690526060830152608082019290925290517f6a7381bdc8f4e7ed3c0f0c299382777bde88a65f0c27f670235401d1544546309181900360a00190a269021e19e0c9bab240000034111561096857600160a060020a0382166000908152600660205260409020805460ff191660011790555b600554604051600160a060020a0361010090920491909116903480156108fc02916000818181858888f1935050505015156109a35760006000fd5b5b5050565b60408051808201909152600781527f4c6f6f6b52657600000000000000000000000000000000000000000000000000602082015281565b60008115801590610a145750600160a060020a0333811660009081526003602090815260408083209387168352929052205415155b15610a2157506000610aab565b600160a060020a03331660009081526002602052604090205482901015610a4a57506000610aab565b600160a060020a03338116600081815260036020908152604080832094881680845294825291829020869055815186815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35060015b92915050565b6a027b46536c66c8e300000081565b60015433600160a060020a03908116911614610adc5760006000fd5b635975e0484210610aed5760006000fd5b60008111610afb5760006000fd5b60078190556040805182815290517fee386bebbe46d39825c2b93313aa1ab1dc57d4774cac81c6debb8c611c9227ab9181900360200190a15b5b50565b60005481565b60015433600160a060020a03908116911614610b5a5760006000fd5b600160a060020a038216600081815260066020908152604091829020805460ff19168515151790819055825160ff9091161515815291517f56630bce62637c61f75690e6d06fae1782bcb5208fa536eff58b0ff669d0d5dc9281900390910190a25b5b5050565b60055460ff1681565b60055460009060ff161515610bdf5760006000fd5b600160a060020a03841660009081526006602052604090205460ff1615610c065760006000fd5b610c11848484611332565b90505b9392505050565b69021e19e0c9bab240000081565b60085481565b601281565b635975e04881565b60015433600160a060020a03908116911614610c585760006000fd5b635975e0484210610c695760006000fd5b60008111610c775760006000fd5b600160a060020a038216600090815260026020526040902054610c9a908261130a565b600160a060020a03831660009081526002602052604081209190915554610cc1908261130a565b6000908155604080518381529051600160a060020a03851692916000805160206115de833981519152919081900360200190a3604080518281529051600160a060020a038416917f7491ef60ef15234f7870c9adc8fb11274a09d6f0d092d2a280e8b75a0c42e12f919081900360200190a25b5b5050565b69021e19e0c9bab240000081565b6005546101009004600160a060020a031681565b635975e0b181565b600160a060020a0381166000908152600260205260409020545b919050565b600160a060020a038216600090815260026020526040812054829010801590610dcc5750600160a060020a0383166000908152600360209081526040808320909152902054829010155b8015610dd85750600082115b8015610e0f57506000805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54828101115b15610f3457600160a060020a038316600090815260026020526040902054610e3790836114b5565b600160a060020a0384166000908152600260209081526040808320939093556003815282822090522054610e6b90836114b5565b600160a060020a038416600090815260036020908152604080832082528220929092558052600290527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54610ec0908361130a565b600080805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b9190915554610efa90836114b5565b6000908155604080518481529051600160a060020a038616916000805160206115de833981519152919081900360200190a3506001610aab565b506000610aab565b5b92915050565b69d3c21bcecceda100000081565b670de0b6b3a764000081565b600154600160a060020a031681565b60095481565b60408051808201909152600381527f4c4f4b0000000000000000000000000000000000000000000000000000000000602082015281565b60015433600160a060020a03908116911614610fc55760006000fd5b60005469021e19e0c9bab240000090101580610fe45750635975e0b142115b1515610ff05760006000fd5b60055460ff16156110015760006000fd5b6005805460ff191660011790555b5b565b60075481565b60055460009060ff16151561102d5760006000fd5b600160a060020a03331660009081526006602052604090205460ff16156110545760006000fd5b61105e83836114db565b90505b92915050565b60066020526000908152604090205460ff1681565b60015460009033600160a060020a0390811691161461109b5760006000fd5b600154604080516000602091820181905282517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0394851660048201526024810187905292519387169363a9059cbb9360448082019493918390030190829087803b151561110e57fe5b6102c65a03f1151561111c57fe5b5050604051519150505b5b92915050565b600160a060020a038083166000908152600360209081526040808320938516835292905220545b92915050565b60015433600160a060020a039081169116146111765760006000fd5b60058054600160a060020a0380841661010090810274ffffffffffffffffffffffffffffffffffffffff00199093169290921792839055604080519290930416815290517f4edbfac5b40fe46ac1af1fd222b224b38cfeeb9e21bd4fc6344526c245f7549b9181900360200190a15b5b50565b60015433600160a060020a039081169116146112055760006000fd5b600160a060020a03811615610b3457600154604051600160a060020a038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b50565b6004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156113025780601f106112d757610100808354040283529160200191611302565b820191906000526020600020905b8154815290600101906020018083116112e557829003601f168201915b505050505081565b600082820183811080159061131f5750828110155b151561132757fe5b8091505b5092915050565b600160a060020a0383166000908152600260205260408120548290108015906113825750600160a060020a0380851660009081526003602090815260408083203390941683529290522054829010155b801561138e5750600082115b80156113b35750600160a060020a038316600090815260026020526040902054828101115b156114a557600160a060020a0384166000908152600260205260409020546113db90836114b5565b600160a060020a038086166000908152600260209081526040808320949094556003815283822033909316825291909152205461141890836114b5565b600160a060020a0380861660009081526003602090815260408083203385168452825280832094909455918616815260029091522054611458908361130a565b600160a060020a0380851660008181526002602090815260409182902094909455805186815290519193928816926000805160206115de83398151915292918290030190a3506001610c14565b506000610c14565b5b9392505050565b600080838311156114c257fe5b508183038381111561132757fe5b8091505b5092915050565b600160a060020a0333166000908152600260205260408120548290108015906115045750600082115b80156115295750600160a060020a038316600090815260026020526040902054828101115b15610f3457600160a060020a03331660009081526002602052604090205461155190836114b5565b600160a060020a033381166000908152600260205260408082209390935590851681522054611580908361130a565b600160a060020a038085166000818152600260209081526040918290209490945580518681529051919333909316926000805160206115de83398151915292918290030190a3506001610aab565b506000610aab565b5b929150505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a723058204cabecc8bdaabf2542b4aff01dddb813fb4ba1239dd3b887274c28ef34bbec120029"},"LookRevCrowdSaleToken.sol:Ownable":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]","bin":"6060604052341561000c57fe5b5b60008054600160a060020a03191633600160a060020a03161790555b5b61015c806100396000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638da5cb5b8114610045578063f2fde38b14610071575bfe5b341561004d57fe5b61005561008f565b60408051600160a060020a039092168252519081900360200190f35b341561007957fe5b61008d600160a060020a036004351661009e565b005b600054600160a060020a031681565b60005433600160a060020a039081169116146100ba5760006000fd5b600160a060020a0381161561012b5760008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b505600a165627a7a72305820e81e6e04597ce44869c9a628a36ac3ef25d73333cb4daf99c0d76bf35d269dad0029"},"LookRevCrowdSaleToken.sol:SafeMath":{"abi":"[]","bin":"60606040523415600b57fe5b5b60338060196000396000f30060606040525bfe00a165627a7a7230582099ca61e2bed3835be41e28af20f6ff6b9ae66c119eb314c5d9c4de44e8ff923c0029"},"LookRevCrowdSaleToken.sol:StandardToken":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":"60606040525b60018054600160a060020a03191633600160a060020a03161790555b5b6106df806100316000396000f3006060604052361561008b5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461008d57806318160ddd146100c057806323b872dd146100e257806370a082311461011b5780638da5cb5b14610149578063a9059cbb14610175578063dd62ed3e146101a8578063f2fde38b146101dc575bfe5b341561009557fe5b6100ac600160a060020a03600435166024356101fa565b604080519115158252519081900360200190f35b34156100c857fe5b6100d06102cc565b60408051918252519081900360200190f35b34156100ea57fe5b6100ac600160a060020a03600435811690602435166044356102d2565b604080519115158252519081900360200190f35b341561012357fe5b6100d0600160a060020a0360043516610463565b60408051918252519081900360200190f35b341561015157fe5b610159610482565b60408051600160a060020a039092168252519081900360200190f35b341561017d57fe5b6100ac600160a060020a0360043516602435610491565b604080519115158252519081900360200190f35b34156101b057fe5b6100d0600160a060020a03600435811690602435166105a5565b60408051918252519081900360200190f35b34156101e457fe5b6101f8600160a060020a03600435166105d2565b005b6000811580159061022f5750600160a060020a0333811660009081526003602090815260408083209387168352929052205415155b1561023c575060006102c6565b600160a060020a03331660009081526002602052604090205482901015610265575060006102c6565b600160a060020a03338116600081815260036020908152604080832094881680845294825291829020869055815186815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35060015b92915050565b60005481565b600160a060020a0383166000908152600260205260408120548290108015906103225750600160a060020a0380851660009081526003602090815260408083203390941683529290522054829010155b801561032e5750600082115b80156103535750600160a060020a038316600090815260026020526040902054828101115b1561045757600160a060020a03841660009081526002602052604090205461037b9083610665565b600160a060020a03808616600090815260026020908152604080832094909455600381528382203390931682529190915220546103b89083610665565b600160a060020a03808616600090815260036020908152604080832033851684528252808320949094559186168152600290915220546103f8908361068b565b600160a060020a0380851660008181526002602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a350600161045b565b5060005b5b9392505050565b600160a060020a0381166000908152600260205260409020545b919050565b600154600160a060020a031681565b600160a060020a0333166000908152600260205260408120548290108015906104ba5750600082115b80156104df5750600160a060020a038316600090815260026020526040902054828101115b1561059657600160a060020a0333166000908152600260205260409020546105079083610665565b600160a060020a033381166000908152600260205260408082209390935590851681522054610536908361068b565b600160a060020a038085166000818152600260209081526040918290209490945580518681529051919333909316927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060016102c6565b5060006102c6565b5b92915050565b600160a060020a038083166000908152600360209081526040808320938516835292905220545b92915050565b60015433600160a060020a039081169116146105ee5760006000fd5b600160a060020a0381161561066057600154604051600160a060020a038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b50565b6000808383111561067257fe5b508183038381111561068057fe5b8091505b5092915050565b60008282018381108015906106a05750828110155b151561068057fe5b8091505b50929150505600a165627a7a723058200cdc93fcff2f988ecbb5814e19feaff9617abf1442b1676463f2f7d37a9975700029"}},"version":"0.4.11+commit.68ef5810.Darwin.appleclang"};
